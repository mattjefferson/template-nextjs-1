import { NextRequest, NextResponse } from 'next/server'
import { createUserSchema } from '@/lib/validations'
import { createSupabaseClient } from '@/lib/supabase'

export async function GET() {
  // Get the authenticated user from the session
  const supabase = createSupabaseClient()
  const { data: { session }, error } = await supabase.auth.getSession()
  
  if (error || !session) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }

  // Example: Fetch user profile data
  // const { data: profile, error: profileError } = await supabase
  //   .from('profiles')
  //   .select('*')
  //   .eq('id', session.user.id)
  //   .single()

  return NextResponse.json({
    success: true,
    data: {
      user: session.user,
      // profile: profile,
    }
  })
}

export async function POST(request: NextRequest) {
  // Note: This endpoint is now protected by middleware
  // Additional authorization logic can be added here
  
  try {
    const body = await request.json()
    
    // Validate request body with Zod
    const validatedData = createUserSchema.parse(body)
    
    // Here you would typically save to database
    // For now, just return the validated data with a mock ID
    const user = {
      id: crypto.randomUUID(),
      ...validatedData,
      createdAt: new Date(),
    }
    
    return NextResponse.json({
      success: true,
      message: 'User created successfully',
      data: user,
    })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          error: error.message,
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error',
      },
      { status: 500 }
    )
  }
} 