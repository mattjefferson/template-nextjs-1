# Authentication Middleware

This template includes authentication middleware that protects sensitive routes and API endpoints.

## How it works

The middleware (`middleware.ts`) intercepts requests and checks for valid authentication sessions using Supabase Auth.

### Protected Routes

**Page Routes:**
- `/dashboard` - User dashboard
- `/profile` - User profile  
- `/settings` - User settings
- `/admin` - Admin area

**API Routes:**
- `/api/users` - User management endpoints
- `/api/posts` - Posts endpoints
- `/api/profile` - Profile endpoints

### Public Routes

These routes bypass authentication:
- `/` - Home page
- `/auth/callback` - OAuth callback
- `/auth/login` - Login page
- `/auth/signup` - Sign up page
- `/api/health` - Health check endpoint

## Configuration

### Adding Protected Routes

Edit `middleware.ts` to add new protected routes:

```typescript
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/settings',
  '/admin',
  '/your-new-route', // Add here
]

const protectedApiRoutes = [
  '/api/users',
  '/api/posts',
  '/api/profile',
  '/api/your-endpoint', // Add here
]
```

### Authentication Flow

1. **Unauthenticated requests to protected pages** → Redirect to `/auth/login` with `redirectTo` parameter
2. **Unauthenticated requests to protected APIs** → Return 401 Unauthorized JSON response
3. **Authenticated requests** → Proceed normally

### Using in API Routes

The middleware automatically protects configured API routes. You can also add additional checks:

```typescript
import { getAuthenticatedUser } from '@/lib/auth-helpers'

export async function GET(request: NextRequest) {
  const { user, error } = await getAuthenticatedUser(request)
  
  if (error) return error // Returns 401 response
  
  // User is authenticated, proceed with logic
  // user.id, user.email, etc. are available
}
```

### Role-Based Access Control

The middleware includes commented-out code for role-based access. To enable:

1. Create a `profiles` table with a `role` column
2. Uncomment the role check in `middleware.ts`
3. Add role checks to specific routes

## Security Considerations

- Service role keys should **never** be exposed to client-side code
- Always validate user permissions on the server side
- Use Supabase Row Level Security (RLS) for database access control
- The middleware runs on every request - keep it lightweight

## Testing

To test the authentication:

1. Try accessing `/dashboard` without logging in → Should redirect to login
2. Login and try again → Should show dashboard
3. Try calling `/api/users` without auth → Should return 401
4. Call with valid session → Should return user data