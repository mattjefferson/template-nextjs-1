import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-24">
      <div className="z-10 max-w-5xl w-full mx-auto">
        {/* Header skeleton */}
        <div className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30 mb-8">
          <div className="h-4 bg-muted rounded animate-pulse w-64"></div>
        </div>

        {/* Title skeleton */}
        <div className="relative flex place-items-center justify-center mb-16">
          <div className="h-12 bg-muted rounded animate-pulse w-80"></div>
        </div>

        {/* Cards grid skeleton */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="space-y-3">
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-4/5"></div>
                  <div className="h-10 bg-muted rounded w-28 mt-4"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom buttons skeleton */}
        <div className="flex gap-4 justify-center">
          <div className="h-10 bg-muted rounded animate-pulse w-24"></div>
          <div className="h-10 bg-muted rounded animate-pulse w-28"></div>
        </div>
      </div>

      {/* Loading spinner overlay */}
      <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full border-4 border-muted"></div>
            <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="text-sm text-muted-foreground animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
