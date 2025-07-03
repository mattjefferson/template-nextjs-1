import { createClient } from '@supabase/supabase-js';

// Simple environment configuration
const getEnvironment = () => {
  return process.env.ENVIRONMENT || 'development';
};

// Client-side Supabase client for use in components
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const environment = getEnvironment();

  if (!supabaseUrl || !supabaseAnonKey) {
    // During build time, return a dummy client to prevent build failures
    if (typeof window === 'undefined') {
      console.warn(
        `Supabase environment variables missing during build for ${environment} environment.`,
      );
      // Return a minimal mock client that won't crash during static generation
      return {
        auth: {
          signInWithPassword: async () => ({
            error: new Error('Supabase not configured'),
          }),
          signInWithOAuth: async () => ({
            error: new Error('Supabase not configured'),
          }),
          signOut: async () => ({
            error: new Error('Supabase not configured'),
          }),
          getSession: async () => ({ data: { session: null }, error: null }),
          onAuthStateChange: () => ({
            data: { subscription: { unsubscribe: () => {} } },
          }),
        },
      } as any;
    }

    throw new Error(
      `Missing Supabase environment variables for ${environment} environment. Please check your .env file and ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.`,
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
};

// Admin client for server-side operations (use with service role key)
export const createSupabaseAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const environment = getEnvironment();

  if (!supabaseUrl || !supabaseServiceKey) {
    // During build time, return a dummy client to prevent build failures
    if (typeof window === 'undefined') {
      console.warn(
        `Supabase admin environment variables missing during build for ${environment} environment.`,
      );
      // Return a minimal mock client that won't crash during static generation
      return {
        auth: {
          admin: {
            listUsers: async () => ({ data: { users: [] }, error: null }),
            getUserById: async () => ({ data: { user: null }, error: null }),
            createUser: async () => ({
              data: { user: null },
              error: new Error('Supabase not configured'),
            }),
            updateUserById: async () => ({
              data: { user: null },
              error: new Error('Supabase not configured'),
            }),
            deleteUser: async () => ({
              data: {},
              error: new Error('Supabase not configured'),
            }),
          },
        },
        from: () => ({
          select: () => ({ data: [], error: null }),
          insert: () => ({
            data: null,
            error: new Error('Supabase not configured'),
          }),
          update: () => ({
            data: null,
            error: new Error('Supabase not configured'),
          }),
          delete: () => ({
            data: null,
            error: new Error('Supabase not configured'),
          }),
        }),
      } as any;
    }

    throw new Error(
      `Missing Supabase admin environment variables for ${environment} environment. Service role key is required for admin operations.`,
    );
  }

  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};

// Utility to get current environment info
export const getSupabaseEnvironmentInfo = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const environment = getEnvironment();

  return {
    environment,
    projectUrl: supabaseUrl,
    hasValidConfig: !!(
      supabaseUrl && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    ),
  };
};

// Database type definitions will be generated using: npx supabase gen types typescript --project-id YOUR_PROJECT_ID --schema public > types/supabase.ts
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          updated_at: string | null;
          username: string | null;
          full_name: string | null;
          avatar_url: string | null;
          website: string | null;
        };
        Insert: {
          id: string;
          updated_at?: string | null;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
        };
        Update: {
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          website?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
};
