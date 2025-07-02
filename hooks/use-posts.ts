import { useQuery } from '@tanstack/react-query'

export interface Post {
  id: number
  title: string
  content: string
  author: string
  createdAt: string
}

export interface PostsResponse {
  posts: Post[]
  total: number
  message: string
}

async function fetchPosts(): Promise<PostsResponse> {
  const response = await fetch('/api/posts')
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return response.json()
}

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    // Optional: Add error retry logic
    retry: (failureCount: number, error: unknown) => {
      // Don't retry on 4xx errors
      if (error instanceof Error && error.message.includes('4')) {
        return false
      }
      // Retry up to 3 times for other errors
      return failureCount < 3
    },
  })
} 