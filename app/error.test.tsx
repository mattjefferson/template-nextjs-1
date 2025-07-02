import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ErrorComponent from './error'

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
    // Mock NODE_ENV
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'

    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    expect(screen.getByText('Error Details (Development Only)')).toBeInTheDocument()
    expect(screen.getByText('Test error message')).toBeInTheDocument()
    
    // Restore original NODE_ENV
    process.env.NODE_ENV = originalEnv
  })

  it('hides error details in production mode', () => {
    // Mock NODE_ENV
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'

    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    expect(screen.queryByText('Error Details (Development Only)')).not.toBeInTheDocument()
    expect(screen.queryByText('Test error message')).not.toBeInTheDocument()
    
    // Restore original NODE_ENV
    process.env.NODE_ENV = originalEnv
  })

  it('displays error digest when provided', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'

    const errorWithDigest = { ...mockError, digest: 'abc123' }
    render(<ErrorComponent error={errorWithDigest} reset={mockReset} />)
    
    expect(screen.getByText(/Digest: abc123/)).toBeInTheDocument()
    
    process.env.NODE_ENV = originalEnv
  })

  it('has proper accessibility attributes', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    const tryAgainButton = screen.getByRole('button', { name: 'Try Again' })
    const goHomeButton = screen.getByRole('button', { name: 'Go Home' })
    
    expect(tryAgainButton).toBeInTheDocument()
    expect(goHomeButton).toBeInTheDocument()
  })

  it('renders destructive styling for error indicator', () => {
    render(<ErrorComponent error={mockError} reset={mockReset} />)
    
    const errorIcon = screen.getByText('!')
    expect(errorIcon).toHaveClass('text-destructive')
  })
}) 