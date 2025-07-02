import { EnvironmentInfo } from '@/components/dev/environment-info';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative flex place-items-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to Next.js</h1>
      </div>

      {/* Environment Info - Only shows in development */}
      <div className="w-full max-w-5xl">
        <EnvironmentInfo />
      </div>
    </main>
  );
}
