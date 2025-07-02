'use client'

import { useState } from 'react'
import { useAuth } from '@/providers/auth-provider'
import { AuthModal } from '@/components/auth/auth-modal'
import { UserProfile } from '@/components/auth/user-profile'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LogIn, UserPlus, Shield } from 'lucide-react'

export function AuthExample() {
  const { user, loading } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  const openLoginModal = () => {
    setAuthMode('login')
    setShowAuthModal(true)
  }

  const openSignupModal = () => {
    setAuthMode('signup')
    setShowAuthModal(true)
  }

  if (loading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Authentication
          </CardTitle>
          <CardDescription>Loading user information...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-muted h-10 w-10" />
              <div className="flex-1 space-y-2 py-1">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Authentication with Supabase
          </CardTitle>
          <CardDescription>
            {user 
              ? 'Welcome back! Here are your account details.'
              : 'Sign in to your account or create a new one to get started.'
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {user ? (
            <div className="flex justify-center">
              <UserProfile />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Demo authentication with email/password and Google OAuth
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={openLoginModal} className="flex-1 max-w-xs">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button onClick={openSignupModal} variant="outline" className="flex-1 max-w-xs">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </div>

              <div className="text-xs text-muted-foreground text-center mt-4">
                <div className="space-y-1">
                  <p>🔐 Secure authentication with Supabase</p>
                  <p>📧 Email confirmation required for new accounts</p>
                  <p>🔑 OAuth support (Google, GitHub, etc.)</p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode={authMode}
      />
    </>
  )
} 