# Next.js 14 + ShadCN Template

A modern Next.js 14 template with TypeScript, Tailwind CSS, ShadCN UI, Zod validation, Biome tooling, and comprehensive testing setup.

## 🚀 Features

- **Next.js 14** - App Router, Server Components, and latest features
- **React 18** - Latest React features with concurrent rendering
- **TypeScript 5** - Strong typing and modern language features
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful components built with Radix UI and Tailwind CSS
- **TanStack Query** - Powerful server state management with caching, background updates, and more
- **Supabase** - Complete backend with authentication, database, and real-time features
- **Zod** - Schema validation for forms and API routes
- **Biome** - Fast formatter and linter (replaces ESLint + Prettier)
- **Vitest** - Lightning fast unit testing with React Testing Library
- **Error Handling** - Comprehensive error boundaries, 404 pages, and loading states

## 📦 UI Components

This template includes ready-to-use ShadCN components:

- **Button** - Multiple variants (default, destructive, outline, secondary, ghost, link)
- **Card** - Complete card system with header, content, and footer
- **Input** - Form input with proper styling
- **Label** - Accessible form labels

All components are fully typed, tested, and follow accessibility best practices.

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── error.tsx          # Error boundary UI
│   ├── loading.tsx        # Loading UI
│   ├── not-found.tsx      # 404 page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with ShadCN tokens
├── components/
│   ├── ui/                # ShadCN UI components
│   │   ├── button.tsx     # Button component
│   │   ├── card.tsx       # Card components
│   │   ├── input.tsx      # Input component
│   │   └── label.tsx      # Label component
│   ├── examples/          # Example components
│   │   └── posts-example.tsx  # TanStack Query demo
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── providers/
│   └── query-provider.tsx # TanStack Query provider
├── lib/
│   ├── utils.ts           # Utility functions (cn helper)
│   └── validations.ts     # Zod schemas
├── types/                 # TypeScript type definitions
├── tests/                 # Test configuration
└── hooks/                 # Custom React hooks
    └── use-posts.ts       # TanStack Query example hook
```

## 🧪 Testing

This template includes comprehensive testing setup:

- **Unit Tests:** Component and function testing
- **Integration Tests:** API route testing
- **UI Testing:** React Testing Library for user interactions

### Available Commands

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with UI
pnpm test:ui

# Generate coverage report
pnpm test:coverage
```

### Test Files

Tests are co-located with source files:
- `components/ui/button.test.tsx` - Button component tests
- `components/ui/card.test.tsx` - Card component tests
- `app/page.test.tsx` - Home page tests
- `app/error.test.tsx` - Error boundary tests
- `app/loading.test.tsx` - Loading UI tests
- `lib/validations.test.ts` - Validation schema tests
- `app/api/users/route.test.ts` - API route tests

## 🎨 Styling

### ShadCN Design System

The template uses ShadCN's design system with:
- **CSS Variables** - For theming and customization
- **Dark Mode** - Built-in dark mode support
- **Component Variants** - Multiple styles for each component
- **Responsive Design** - Mobile-first approach

### Adding New Components

Use the ShadCN CLI to add new components:
```bash
npx shadcn-ui@latest add [component-name]
```

### Customizing Theme

Modify the design tokens in:
- `app/globals.css` - CSS variables
- `tailwind.config.ts` - Tailwind configuration

## 🔧 Development Tools

### Biome

- **Formatting:** `pnpm format`
- **Linting:** `pnpm lint`
- **Check:** `pnpm check` (format + lint)

### Configuration Files

- `biome.json` - Biome configuration
- `vitest.config.ts` - Test configuration
- `tailwind.config.ts` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration

## 🚨 Error Handling & Loading States

### Error Boundaries

- **app/error.tsx** - Catches JavaScript errors in route segments
- **app/not-found.tsx** - Custom 404 page
- **app/loading.tsx** - Loading UI with skeleton states
- Automatic error logging and user-friendly interfaces

### Loading UI Features

- **Skeleton Loading** - Matches your page layout structure
- **Loading Spinner** - Animated spinner with backdrop
- **Responsive Design** - Works on all screen sizes
- **Accessibility** - Screen reader friendly loading states
- **Smooth Animations** - Pulse and spin animations using Tailwind

### Error Handling Features

- **Development Mode** - Shows detailed error information
- **Production Mode** - User-friendly error messages
- **Recovery Options** - Reset error boundary or navigate home
- **Accessibility** - Proper ARIA attributes and keyboard navigation

## 🔄 TanStack Query

TanStack Query is configured for powerful server state management with:

- **Automatic Caching** - Intelligent request deduplication and caching
- **Background Refetching** - Keep data fresh with background updates
- **Loading & Error States** - Built-in loading and error handling
- **DevTools** - Debug queries with React Query DevTools
- **Optimistic Updates** - Immediate UI updates for better UX

### Usage Example

```typescript
// hooks/use-posts.ts
import { useQuery } from '@tanstack/react-query'

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

// components/posts-example.tsx
import { usePosts } from '@/hooks/use-posts'

export function PostsExample() {
  const { data, isLoading, error, refetch } = usePosts()
  // Component implementation...
}
```

## 🔐 Supabase Authentication & Database

Supabase is configured for complete backend functionality with:

- **Authentication** - Email/password, OAuth (Google, GitHub, etc.), magic links
- **Database** - PostgreSQL with real-time subscriptions
- **Row Level Security** - Secure data access patterns
- **Edge Functions** - Server-side logic at the edge
- **Storage** - File uploads and management

### Setup Instructions

1. **Create a Supabase project** at [supabase.com](https://supabase.com)

2. **Add environment variables** to `.env.local`:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```

3. **Set up authentication redirect URLs** in your Supabase dashboard:
   - Development: `http://localhost:3000/auth/callback`
   - Production: `https://yourdomain.com/auth/callback`

### Authentication Usage

```typescript
// Using the auth provider
import { useAuth } from '@/providers/auth-provider'

export function MyComponent() {
  const { user, loading, signOut } = useAuth()
  
  if (loading) return <div>Loading...</div>
  if (!user) return <LoginForm />
  
  return (
    <div>
      <p>Welcome, {user.email}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

// Direct Supabase client usage
import { createSupabaseClient } from '@/lib/supabase'

const supabase = createSupabaseClient()

// Sign up
const { error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'password',
  options: {
    data: { full_name: 'John Doe' }
  }
})

// Sign in
const { error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'password'
})

// OAuth sign in
const { error } = await supabase.auth.signInWithOAuth({
  provider: 'google',
  options: {
    redirectTo: `${window.location.origin}/auth/callback`
  }
})
```

### Database Usage

```typescript
// Fetch data
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })

// Insert data
const { data, error } = await supabase
  .from('posts')
  .insert({ title: 'Hello World', content: 'My first post' })
  .select()

// Real-time subscriptions
const subscription = supabase
  .channel('posts')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => console.log('Change received!', payload)
  )
  .subscribe()
```

### Auth Components

Pre-built authentication components:

- **LoginForm** - Email/password login with OAuth options
- **SignupForm** - User registration with email confirmation
- **AuthModal** - Modal that switches between login/signup
- **UserProfile** - Display user information and logout
- **AuthExample** - Complete authentication demo

### Database Schema Example

```sql
-- Enable RLS (Row Level Security)
alter table posts enable row level security;

-- Create a table
create table posts (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text,
  user_id uuid references auth.users not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create RLS policies
create policy "Users can insert their own posts" on posts for insert with check (auth.uid() = user_id);
create policy "Users can view all posts" on posts for select using (true);
create policy "Users can update their own posts" on posts for update using (auth.uid() = user_id);
create policy "Users can delete their own posts" on posts for delete using (auth.uid() = user_id);
```

⚠️ **Note:** The current setup uses deprecated auth helpers. Consider migrating to `@supabase/ssr` for the latest features and security updates.

### Migration to @supabase/ssr

To use the latest Supabase auth helpers:

1. Replace dependencies in `package.json`:
   ```bash
   pnpm remove @supabase/auth-helpers-nextjs @supabase/auth-helpers-react
   pnpm add @supabase/ssr
   ```

2. Update `lib/supabase.ts` to use the new SSR helpers
3. Follow the [Supabase SSR guide](https://supabase.com/docs/guides/auth/auth-helpers/nextjs) for migration details

## 🗃️ API Routes

Example API route with Zod validation:

```typescript
// app/api/users/route.ts
import { createUserSchema } from '@/lib/validations'

export async function POST(request: Request) {
  const body = await request.json()
  const validatedData = createUserSchema.parse(body)
  // Handle validated data
}
```

## 📝 Environment Variables

Create a `.env.local` file in your project root:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
  const { data, isLoading, error, refetch } = usePosts()
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading posts</div>
  
  return (
    <div>
      {data?.posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={() => refetch()}>Refresh</button>
    </div>
  )
}
```

### Query Provider Setup

The app is wrapped with QueryProvider in `app/layout.tsx`:

```typescript
import { QueryProvider } from '@/providers/query-provider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
```

### DevTools

TanStack Query DevTools are automatically included in development mode. Look for the React Query logo in the bottom-left corner of your browser.

## 📝 API Routes

Example API route with Zod validation:

```typescript
// app/api/users/route.ts
import { createUserSchema } from '@/lib/validations'

export async function POST(request: Request) {
  const body = await request.json()
  const validatedData = createUserSchema.parse(body)
  // Handle validated data
}
```

## 🔗 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [ShadCN UI](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Zod Documentation](https://zod.dev)
- [Vitest Documentation](https://vitest.dev)
- [Biome Documentation](https://biomejs.dev)

## 📄 License

MIT License - feel free to use this template for your projects!
