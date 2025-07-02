'use client'

import { usePosts, type Post } from '@/hooks/use-posts'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { RefreshCw, AlertCircle, Calendar, User } from 'lucide-react'

export function PostsExample() {
  const { data, isLoading, error, refetch, isFetching } = usePosts()

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Latest Posts</CardTitle>
          <CardDescription>Loading posts...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                <div className="h-3 bg-muted rounded w-1/4" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <AlertCircle size={20} />
            Error Loading Posts
          </CardTitle>
          <CardDescription>
            {error instanceof Error ? error.message : 'Something went wrong'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => refetch()} variant="outline">
            <RefreshCw size={16} className="mr-2" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Latest Posts</CardTitle>
            <CardDescription>
              {data?.total} posts • Powered by TanStack Query
            </CardDescription>
          </div>
          <Button 
            onClick={() => refetch()} 
            variant="outline" 
            size="sm"
            disabled={isFetching}
          >
            <RefreshCw size={16} className={`mr-2 ${isFetching ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data?.posts.map((post: Post) => (
            <div key={post.id} className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{post.content}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User size={12} />
                  {post.author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 