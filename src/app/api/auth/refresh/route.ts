<<<<<<< HEAD
import { NextResponse } from 'next/server'
=======
import { NextRequest, NextResponse } from 'next/server'
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
import { createUserClient } from '@/lib/supabase/server'

/**
 * POST /api/auth/refresh
 * Refresh authentication session
 */
<<<<<<< HEAD
export async function POST() {
=======
export async function POST(request: NextRequest) {
>>>>>>> 041cd02113280a42c8dc19711e1ef7bc18db31dc
  try {
    const { supabase, session } = await createUserClient()

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'No session to refresh' },
        { status: 401 }
      )
    }

    // Refresh the session
    const { data, error } = await supabase.auth.refreshSession()

    if (error) {
      console.error('Refresh session error:', error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        session: data.session,
        user: data.user,
      },
    })
  } catch (error) {
    console.error('Refresh session error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to refresh session' },
      { status: 500 }
    )
  }
}