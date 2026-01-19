"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase/client"
import { ArrowLeft, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password/reset`,
    })

    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-foreground text-background flex-col justify-between p-12">
        <Link href="/" className="text-2xl font-bold">
          LabelPro
        </Link>

        <div className="space-y-6">
          <blockquote className="text-2xl font-medium leading-relaxed">
            "LabelPro has completely transformed how we handle shipping labels. What used to take hours now takes
            minutes."
          </blockquote>
          <div>
            <p className="font-semibold">Sarah Chen</p>
            <p className="text-background/60">Operations Manager, FastShip Co.</p>
          </div>
        </div>

        <p className="text-sm text-background/40">Trusted by 10,000+ e-commerce sellers worldwide</p>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden mb-8">
            <Link href="/" className="text-2xl font-bold text-foreground">
              LabelPro
            </Link>
          </div>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>

          {!sent ? (
            <>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Forgot password?</h1>
                <p className="text-muted-foreground">
                  No worries, we'll send you reset instructions to your email
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send reset link"}
                </Button>
              </form>
            </>
          ) : (
            <div className="space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Check your email</h1>
                <p className="text-muted-foreground">
                  We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted">
                <p className="text-sm text-muted-foreground">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button
                    onClick={() => setSent(false)}
                    className="font-medium text-foreground hover:underline"
                  >
                    try again
                  </button>
                </p>
              </div>
            </div>
          )}

          <p className="text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link href="/login" className="font-medium text-foreground hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
