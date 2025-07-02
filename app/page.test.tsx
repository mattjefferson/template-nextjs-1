import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    
    const heading = screen.getByRole('heading', { 
      name: /next\.js 14 \+ react 18 template/i 
    })
    
    expect(heading).toBeInTheDocument()
  })

  it('renders all technology links', () => {
    render(<Home />)
    
    // Check for Next.js link
    const nextLink = screen.getByRole('link', { name: /next\.js 14/i })
    expect(nextLink).toBeInTheDocument()
    expect(nextLink).toHaveAttribute('href', 'https://nextjs.org/docs')
    
    // Check for React link
    const reactLink = screen.getByRole('link', { name: /react 18/i })
    expect(reactLink).toBeInTheDocument()
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
    
    // Check for TypeScript link
    const tsLink = screen.getByRole('link', { name: /typescript/i })
    expect(tsLink).toBeInTheDocument()
    expect(tsLink).toHaveAttribute('href', 'https://www.typescriptlang.org')
  })

  it('displays the get started message', () => {
    render(<Home />)
    
    const message = screen.getByText(/get started by editing/i)
    expect(message).toBeInTheDocument()
    
    const codeElement = screen.getByText('app/page.tsx')
    expect(codeElement).toBeInTheDocument()
  })
}) 