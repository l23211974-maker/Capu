import { describe, expect, it } from 'vitest';
import { PriorityLevel, UserRole } from '@capu/types';
import { createTaskRequestSchema } from '@capu/validation';

describe('shared domain validation smoke', () => {
  it('accepts a valid task payload', () => {
    const payload = {
      title: 'Prepare calculus assignment',
      description: 'Review chapter 4 and solve the exercise sheet',
      dueDate: new Date().toISOString(),
      priority: PriorityLevel.HIGH,
      classId: 'class-1'
    };

    const result = createTaskRequestSchema.safeParse(payload);

    expect(result.success).toBe(true);
  });

  it('exposes expected enums for shared domain logic', () => {
    expect(UserRole.STUDENT).toBe('student');
  });
});
