// Custom types for the application
export interface AppConfig {
  name: string
  description: string
  version: string
}

export interface ApiResponse<T = unknown> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T = unknown> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
} 