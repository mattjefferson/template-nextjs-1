// Custom types for the application
export interface AppConfig {
  name: string
  description: string
  version: string
}

export interface ApiResponse<T = any> {
  data: T
  success: boolean
  message?: string
}

export interface PaginatedResponse<T = any> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
} 