import { describe, it, expect } from 'vitest'
import { POST } from './route'

// Mock NextRequest for testing
const createMockRequest = (body: any) => {
  return {
    json: async () => body,
  } as any
}

describe('/api/users POST', () => {
  it('should create a user with valid data', async () => {
    const validUserData = {
      email: 'test@example.com',
      name: 'John Doe',
    }

    const request = createMockRequest(validUserData)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toBe('User created successfully')
    expect(data.data).toMatchObject({
      email: validUserData.email,
      name: validUserData.name,
    })
    expect(data.data.id).toBeDefined()
    expect(data.data.createdAt).toBeDefined()
  })

  it('should reject invalid email', async () => {
    const invalidUserData = {
      email: 'invalid-email',
      name: 'John Doe',
    }

    const request = createMockRequest(invalidUserData)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.message).toBe('Validation failed')
    expect(data.error).toBeDefined()
  })

  it('should reject empty name', async () => {
    const invalidUserData = {
      email: 'test@example.com',
      name: '',
    }

    const request = createMockRequest(invalidUserData)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.message).toBe('Validation failed')
  })

  it('should reject missing required fields', async () => {
    const invalidUserData = {
      email: 'test@example.com',
      // missing name
    }

    const request = createMockRequest(invalidUserData)
    const response = await POST(request)
    const data = await response.json()

    expect(response.status).toBe(400)
    expect(data.success).toBe(false)
    expect(data.message).toBe('Validation failed')
  })
}) 