/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@supabase/supabase-js'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: (() => {
      const env = process.env.ENVIRONMENT || 'development'
      switch (env) {
        case 'production':
          return process.env.PRODUCTION_SUPABASE_URL
        case 'staging':
          return process.env.STAGING_SUPABASE_URL
        case 'development':
        default:
          return process.env.DEVELOPMENT_SUPABASE_URL
      }
    })(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: (() => {
      const env = process.env.ENVIRONMENT || 'development'
      switch (env) {
        case 'production':
          return process.env.PRODUCTION_SUPABASE_ANON_KEY
        case 'staging':
          return process.env.STAGING_SUPABASE_ANON_KEY
        case 'development':
        default:
          return process.env.DEVELOPMENT_SUPABASE_ANON_KEY
      }
    })(),
  },
}

module.exports = nextConfig 