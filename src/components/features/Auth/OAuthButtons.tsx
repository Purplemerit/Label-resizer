'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
<<<<<<< HEAD
import { Chrome } from 'lucide-react'
=======
import { Chrome, ShoppingBag } from 'lucide-react'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc

export interface OAuthButtonsProps {
  redirectTo?: string
  className?: string
}

/**
 * OAuth authentication buttons (Google, Amazon)
 */
export const OAuthButtons: React.FC<OAuthButtonsProps> = ({
  redirectTo = '/dashboard',
  className,
}) => {
  const handleGoogleAuth = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirectTo)}`,
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

<<<<<<< HEAD
=======
  const handleAmazonAuth = async () => {
    try {
      // Note: Amazon OAuth requires special setup in Supabase
      // This is a placeholder - you'll need to configure Amazon as a provider
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'amazon',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?redirect=${encodeURIComponent(redirectTo)}`,
        },
      })

      if (error) {
        console.error('Amazon OAuth error:', error)
        alert('Failed to sign in with Amazon. Please try again.')
      }
    } catch (error) {
      console.error('Amazon OAuth error:', error)
      alert('An error occurred. Please try again.')
    }
  }

>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
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
<<<<<<< HEAD
=======
      <Button
        variant="outline"
        className="w-full"
        onClick={handleAmazonAuth}
      >
        <ShoppingBag size={18} className="mr-2" />
        Continue with Amazon
      </Button>
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
    </div>
  )
}

export default OAuthButtons

