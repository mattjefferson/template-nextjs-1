import { createClient } from '@supabase/supabase-js'

// Simple environment configuration
const getEnvironment = () => {
  return process.env.ENVIRONMENT || 'development'
}

// Client-side Supabase client for use in components
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const environment = getEnvironment()

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      `Missing Supabase environment variables for ${environment} environment. Please check your .env file and ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.`
    )
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
}

// Admin client for server-side operations (use with service role key)
export const createSupabaseAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const environment = getEnvironment()
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error(
      `Missing Supabase admin environment variables for ${environment} environment. Service role key is required for admin operations.`
    )
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

// Utility to get current environment info
export const getSupabaseEnvironmentInfo = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const environment = getEnvironment()
  
  return {
    environment,
    projectUrl: supabaseUrl,
    hasValidConfig: !!(supabaseUrl && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  }
}

// Database type definitions will be generated using: npx supabase gen types typescript --project-id YOUR_PROJECT_ID --schema public > types/supabase.ts
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          full_name: string | null
          avatar_url: string | null
          website: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 