import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { 
      name: /welcome to next\.js/i 
    })
    
    expect(heading).toBeInTheDocument()
  })

  it('renders the development environment info', () => {
    render(<Home />)
    
    const envHeading = screen.getByText(/development environment info/i)
    expect(envHeading).toBeInTheDocument()
    
    const envStatus = screen.getByText(/development/)
    expect(envStatus).toBeInTheDocument()
  })

  it('shows Supabase configuration status', () => {
    render(<Home />)
    
    const supabaseStatus = screen.getByText(/supabase project/i)
    expect(supabaseStatus).toBeInTheDocument()
    
    const notConfigured = screen.getByText(/not configured/i)
    expect(notConfigured).toBeInTheDocument()
  })
}) 