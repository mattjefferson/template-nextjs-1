'use client';

import { getSupabaseEnvironmentInfo } from '@/lib/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function EnvironmentInfo() {
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const envInfo = getSupabaseEnvironmentInfo();

  return (
    <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
          🔧 Development Environment Info
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-xs space-y-1 text-yellow-700 dark:text-yellow-300">
          <div>
            <strong>Environment:</strong> {envInfo.environment}
          </div>
          <div>
            <strong>Supabase Project:</strong>{' '}
            {envInfo.projectUrl ? (
              <span className="font-mono">{envInfo.projectUrl}</span>
            ) : (
              <span className="text-red-600 dark:text-red-400">
                Not configured
              </span>
            )}
          </div>
          <div>
            <strong>Config Status:</strong>{' '}
            {envInfo.hasValidConfig ? (
              <span className="text-green-600 dark:text-green-400">
                ✓ Valid
              </span>
            ) : (
              <span className="text-red-600 dark:text-red-400">
                ✗ Missing variables
              </span>
            )}
          </div>
          {!envInfo.hasValidConfig && (
            <div className="text-xs mt-2 p-2 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded">
              <p className="text-red-700 dark:text-red-300">
                Missing Supabase environment variables. Create a{' '}
                <code className="bg-red-100 dark:bg-red-900 px-1 rounded">
                  .env
                </code>{' '}
                file with your Supabase credentials.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
