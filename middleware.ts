import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Define protected routes and API endpoints
const protectedRoutes = ['/dashboard', '/profile', '/settings', '/admin'];

const protectedApiRoutes = ['/api/users', '/api/posts', '/api/profile'];

// Define public routes that should bypass auth
const publicRoutes = [
  '/',
  '/auth/callback',
  '/auth/login',
  '/auth/signup',
  '/api/health',
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isProtectedApiRoute = protectedApiRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (isProtectedRoute || isProtectedApiRoute) {
    // Get the session token from cookies
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Missing Supabase environment variables in middleware');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 },
      );
    }

    // Create a Supabase client with the request cookies
    const supabase = createClient(supabaseUrl, supabaseAnonKey, {
      global: {
        headers: {
          cookie: request.headers.get('cookie') || '',
        },
      },
    });

    // Check if we have a session
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error || !session) {
      // For API routes, return 401 Unauthorized
      if (isProtectedApiRoute) {
        return NextResponse.json(
          { error: 'Authentication required' },
          { status: 401 },
        );
      }

      // For page routes, redirect to login
      const redirectUrl = new URL('/auth/login', request.url);
      redirectUrl.searchParams.set('redirectTo', pathname);
      return NextResponse.redirect(redirectUrl);
    }

    // Session exists, allow the request to proceed
    // You can add additional checks here like role-based access control
    if (pathname.startsWith('/admin')) {
      // Example: Check if user has admin role
      // This would require fetching user profile/roles from your database
      // const { data: profile } = await supabase
      //   .from('profiles')
      //   .select('role')
      //   .eq('id', session.user.id)
      //   .single()
      // if (profile?.role !== 'admin') {
      //   return NextResponse.json(
      //     { error: 'Insufficient permissions' },
      //     { status: 403 }
      //   )
      // }
    }
  }

  return NextResponse.next();
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
