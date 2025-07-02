# Development Tech Stack

## Core Languages & Frameworks
- **TypeScript 5** - Primary language
- **React 18+** - UI library
- **Next.js 14+** (App Router) - Full-stack React framework

## Frontend
- **ShadCN** - Component library (built on Radix UI)
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Query** - Server state management

## Data & Validation
- **Supabase** - Database, authentication
- **Zod** - Schema validation

## AI & Communication
- **Vercel AI SDK** - LLM integration
- **React Email** - Email templates
- **Resend** - Email delivery service

## Infrastructure & Deployment
- **Docker** - Containerization
- **Vercel** - Hosting and deployment

## Development Tooling
- **PNPM** - Package manager
- **Biome** - Code formatting and linting
- **GitHub Actions** - CI/CD pipeline

## Testing
- **Vitest** - Unit and integration testing
- **Testing Library** - Component testing
- **Playwright** - End-to-end testing

## File Structure
```
/app                    (Next.js app router)
  /api                  (API routes)
  /globals.css          (Global styles)
  /layout.tsx           (Root layout)
  /page.tsx             (Home page)
  /(auth)               (Route groups)

/components
  /ui                   (ShadCN components)
  /forms                (Reusable form components)
  /layout               (Layout components)

/lib
  /supabase.ts          (Supabase client)
  /utils.ts             (Utilities)
  /validations.ts       (Zod schemas)

/types
  /supabase.ts          (Generated types)
  /index.ts             (Custom types)

/hooks                  (Custom React hooks)
/providers              (Context providers)
/public                 (Static assets)

/tests
  /e2e                  (Playwright E2E tests only)
  /setup.ts             (Test configuration)

Note: Unit/component tests are co-located with source files
Example: /components/ui/button.tsx + /components/ui/button.test.tsx
```

## Key Scripts
- `format` - Run Biome formatting
- `lint` - Run Biome linting
- `test` - Run test suite

## Architecture Notes
- Use Next.js server actions for backend logic
- Supabase handles data persistence and authentication
- Vercel AI SDK manages LLM interactions
- TanStack Query handles client-side data fetching and caching