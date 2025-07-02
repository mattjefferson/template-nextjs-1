# Next.js 14 + ShadCN Template

A modern Next.js 14 template with TypeScript, Tailwind CSS, ShadCN UI, Zod validation, Biome tooling, and comprehensive testing setup.

## 🚀 Features

- **Next.js 14** - App Router, Server Components, and latest features
- **React 18** - Latest React features with concurrent rendering
- **TypeScript 5** - Strong typing and modern language features
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful components built with Radix UI and Tailwind CSS
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
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── lib/
│   ├── utils.ts           # Utility functions (cn helper)
│   └── validations.ts     # Zod schemas
├── types/                 # TypeScript type definitions
├── tests/                 # Test configuration
└── hooks/                 # Custom React hooks
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
