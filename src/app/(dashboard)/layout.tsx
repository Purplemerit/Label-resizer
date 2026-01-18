import React from 'react'
import { redirect } from 'next/navigation'
import { createUserClient } from '@/lib/supabase/server'

export default async function DashboardLayout({
  children,
  modals,
}: {
  children: React.ReactNode
  modals: React.ReactNode
}) {
  const { session } = await createUserClient()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-secondary)]">
      <main>{children}</main>
      {modals}
    </div>
  )
}

