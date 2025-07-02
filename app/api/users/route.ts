import { NextRequest, NextResponse } from 'next/server'
import { createUserSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
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