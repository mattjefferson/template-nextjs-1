import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ErrorComponent from './error'

// Type for mocking process.env
interface MockProcessEnv {
  NODE_ENV: "development" | "production" | "test"
  [key: string]: string | undefined
}

// Mock console.error to avoid noise in tests
const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

// Mock window.location
Object.defineProperty(window, 'location', {
  value: {
    href: '',
  },
  writable: true,
})

describe('Error Component', () => {
  const mockError = new globalThis.Error('Test error message')
  const mockReset = vi.fn()

  beforeEach(() => {
    consoleSpy.mockClear()
    mockReset.mockClear()
    // Reset window.location.href
    window.location.href = ''
  })

  it('renders error message', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    expect(screen.getByText(/An unexpected error occurred/)).toBeInTheDocument()
  })

  it('logs error to console', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    expect(consoleSpy).toHaveBeenCalledWith('Application error:', mockError)
  })

  it('calls reset function when Try Again is clicked', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    const tryAgainButton = screen.getByRole('button', { name: 'Try Again' })
    fireEvent.click(tryAgainButton)
    
    expect(mockReset).toHaveBeenCalledOnce()
  })

  it('navigates to home when Go Home is clicked', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    const goHomeButton = screen.getByRole('button', { name: 'Go Home' })
    fireEvent.click(goHomeButton)
    
    expect(window.location.href).toBe('/')
  })

  it('shows error details in development mode', () => {
    // Mock NODE_ENV using vi.spyOn
    const envSpy = vi.spyOn(process, 'env', 'get').mockReturnValue({ NODE_ENV: 'development' } as MockProcessEnv)

    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    expect(screen.getByText('Error Details (Development Only)')).toBeInTheDocument()
    expect(screen.getByText('Test error message')).toBeInTheDocument()
    
    // Restore environment
    envSpy.mockRestore()
  })

  it('hides error details in production mode', () => {
    // Mock NODE_ENV using vi.spyOn
    const envSpy = vi.spyOn(process, 'env', 'get').mockReturnValue({ NODE_ENV: 'production' } as MockProcessEnv)

    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    expect(screen.queryByText('Error Details (Development Only)')).not.toBeInTheDocument()
    expect(screen.queryByText('Test error message')).not.toBeInTheDocument()
    
    // Restore environment
    envSpy.mockRestore()
  })

  it('displays error digest when provided', () => {
    const envSpy = vi.spyOn(process, 'env', 'get').mockReturnValue({ NODE_ENV: 'development' } as MockProcessEnv)

    const errorWithDigest = { ...mockError, digest: 'abc123' }
    render(<ErrorComponent error={errorWithDigest} reset={mockReset} />)
    
    expect(screen.getByText(/Digest: abc123/)).toBeInTheDocument()
    
    envSpy.mockRestore()
  })

  it('has proper accessibility attributes', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    const tryAgainButton = screen.getByRole('button', { name: 'Try Again' })
    const goHomeButton = screen.getByRole('button', { name: 'Go Home' })
    
    expect(tryAgainButton).toBeInTheDocument()
    expect(goHomeButton).toBeInTheDocument()
  })

  it('renders destructive styling for error indicator', () => {
    const { container } = render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    // Check for AlertTriangle SVG with destructive styling
    const errorIcon = container.querySelector('svg.text-destructive')
    expect(errorIcon).toBeInTheDocument()
    expect(errorIcon).toHaveClass('text-destructive')
  })
}) 