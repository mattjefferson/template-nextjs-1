'use client'

import { useState } from 'react'
import { LoginForm } from './login-form'
import { SignupForm } from './signup-form'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: 'login' | 'signup'
}

export function AuthModal({ isOpen, onClose, defaultMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode)

  const toggleMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login')
  }

  const handleSuccess = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-md p-4">
        {mode === 'login' ? (
          <LoginForm onToggleMode={toggleMode} onSuccess={handleSuccess} />
        ) : (
          <SignupForm onToggleMode={toggleMode} onSuccess={handleSuccess} />
        )}
      </div>
    </div>
  )
} 