import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import type { User } from '@supabase/supabase-js'

interface AuthResult {
  user: User | null
  error: NextResponse | null
}

/**
 * Helper function to get authenticated user from request
 * Returns user if authenticated, or an error response if not
 */
export async function getAuthenticatedUser(request: NextRequest): Promise<AuthResult> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      user: null,
      error: NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    },
  })

  const { data: { session }, error } = await supabase.auth.getSession()

  if (error || !session) {
    return {
      user: null,
      error: NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
  }

  return {
    user: session.user,
    error: null
  }
}

/**
 * Helper function to create a Supabase client for server-side operations
 * with the request's cookies
 */
export function createServerSupabaseClient(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    },
  })
}