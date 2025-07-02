/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />

// Global test types and utilities
declare global {
  namespace Vi {
    interface JestAssertion<T = any>
      extends jest.Matchers<void, T>,
        jest.Matchers<Promise<void>, T> {}
  }
} 