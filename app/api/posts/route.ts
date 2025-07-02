import { NextResponse } from 'next/server'

// Mock data for demonstration
const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    content: 'Learn how to build modern web applications with Next.js 14 and the App Router.',
    author: 'John Doe',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    title: 'TanStack Query Best Practices',
    content: 'Discover how to effectively manage server state in your React applications.',
    author: 'Jane Smith',
    createdAt: '2024-01-14T15:30:00Z',
  },
  {
    id: 3,
    title: 'Building with ShadCN UI',
    content: 'Create beautiful and accessible user interfaces with ShadCN UI components.',
    author: 'Bob Johnson',
    createdAt: '2024-01-13T09:15:00Z',
  },
]

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return NextResponse.json({
    posts,
    total: posts.length,
    message: 'Posts fetched successfully'
  })
} 