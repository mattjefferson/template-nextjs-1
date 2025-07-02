import { describe, it, expect } from 'vitest';
import { userSchema, createUserSchema, contactFormSchema } from './validations';

describe('Validation Schemas', () => {
  describe('userSchema', () => {
    it('should validate a valid user', () => {
      const validUser = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        email: 'test@example.com',
        name: 'John Doe',
        createdAt: new Date(),
      };

      expect(() => userSchema.parse(validUser)).not.toThrow();
    });

    it('should reject invalid email', () => {
      const invalidUser = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        email: 'invalid-email',
        name: 'John Doe',
        createdAt: new Date(),
      };

      expect(() => userSchema.parse(invalidUser)).toThrow();
    });

    it('should reject empty name', () => {
      const invalidUser = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        email: 'test@example.com',
        name: '',
        createdAt: new Date(),
      };

      expect(() => userSchema.parse(invalidUser)).toThrow();
    });
  });

  describe('createUserSchema', () => {
    it('should validate user creation data', () => {
      const validCreateUser = {
        email: 'test@example.com',
        name: 'John Doe',
      };

      expect(() => createUserSchema.parse(validCreateUser)).not.toThrow();
    });
  });

  describe('contactFormSchema', () => {
    it('should validate a valid contact form', () => {
      const validForm = {
        name: 'John Doe',
        email: 'test@example.com',
        message: 'This is a test message that is long enough',
      };

      expect(() => contactFormSchema.parse(validForm)).not.toThrow();
    });

    it('should reject short name', () => {
      const invalidForm = {
        name: 'J',
        email: 'test@example.com',
        message: 'This is a test message that is long enough',
      };

      expect(() => contactFormSchema.parse(invalidForm)).toThrow();
    });

    it('should reject short message', () => {
      const invalidForm = {
        name: 'John Doe',
        email: 'test@example.com',
        message: 'Short',
      };

      expect(() => contactFormSchema.parse(invalidForm)).toThrow();
    });
  });
});
