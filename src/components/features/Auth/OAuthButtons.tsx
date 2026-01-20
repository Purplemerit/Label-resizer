'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
import { Chrome, Github } from 'lucide-react'

export interface OAuthButtonsProps {
  redirectTo?: string
  className?: string
}

/**
 * OAuth authentication buttons (Google, GitHub)
 */
export const OAuthButtons: React.FC<OAuthButtonsProps> = ({
  redirectTo = '/dashboard',
  className,
}) => {
  const getRedirectUrl = () => {
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://laravel-resizer-pro.vercel.app'
      : 'http://localhost:3000'
    return `${baseUrl}/auth/callback?redirect=${encodeURIComponent(redirectTo)}`
  }

  const handleGoogleAuth = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: getRedirectUrl(),
        },
      })

      if (error) {
        console.error('Google OAuth error:', error)
        alert('Failed to sign in with Google. Please try again.')
      }
    } catch (error) {
      console.error('Google OAuth error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  const handleGitHubAuth = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: getRedirectUrl(),
        },
      })

      if (error) {
        console.error('GitHub OAuth error:', error)
        alert('Failed to sign in with GitHub. Please try again.')
      }
    } catch (error) {
      console.error('GitHub OAuth error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <div className={`space-y-3 ${className}`}>
      <Button
        variant="outline"
        className="w-full"
        onClick={handleGoogleAuth}
      >
        <Chrome size={18} className="mr-2" />
        Continue with Google
      </Button>
      
      <Button
        variant="outline"
        className="w-full"
        onClick={handleGitHubAuth}
      >
        <Github size={18} className="mr-2" />
        Continue with GitHub
      </Button>
    </div>
  )
}

export default OAuthButtons

