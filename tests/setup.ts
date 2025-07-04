import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Extend Vitest's expect with jest-dom matchers
expect.extend({
  // Add any custom matchers here if needed
});
