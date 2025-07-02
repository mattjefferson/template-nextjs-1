import { z } from 'zod'

// Example validation schemas
export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(1, 'Name is required'),
  createdAt: z.date(),
})

export const createUserSchema = userSchema.omit({ id: true, createdAt: true })

// Form validation example
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// API response validation
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  data: z.any().optional(),
})

// Export types
export type User = z.infer<typeof userSchema>
export type CreateUser = z.infer<typeof createUserSchema>
export type ContactForm = z.infer<typeof contactFormSchema>
export type ApiResponse = z.infer<typeof apiResponseSchema> 