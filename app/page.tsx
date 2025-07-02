import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold">
          Next.js 14 + ShadCN Template
        </h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Next.js 14</CardTitle>
            <CardDescription>
              App Router, Server Components, and more.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              The React framework for production with the latest features.
            </p>
            <Button asChild>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ShadCN UI</CardTitle>
            <CardDescription>
              Beautiful components built with Radix UI and Tailwind CSS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Copy and paste components that you can customize to your needs.
            </p>
            <Button variant="secondary" asChild>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Components
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TypeScript</CardTitle>
            <CardDescription>
              Type-safe development with excellent tooling.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Static type checking for scalable applications.
            </p>
            <Button variant="outline" asChild>
              <a
                href="https://www.typescriptlang.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant="ghost">Learn More</Button>
      </div>
    </main>
  )
} 