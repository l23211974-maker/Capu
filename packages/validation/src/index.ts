import { z } from 'zod';
import { PriorityLevel, TaskStatus, UserRole } from '@capu/types';

export const idSchema = z.string().min(1);
export const isoDateSchema = z.string().datetime({ offset: true });

export const userSchema = z.object({
  id: idSchema,
  email: z.string().email(),
  role: z.nativeEnum(UserRole),
  createdAt: isoDateSchema
});

export const profileSchema = z.object({
  userId: idSchema,
  displayName: z.string().min(1),
  timezone: z.string().min(1)
});

export const classSchema = z.object({
  id: idSchema,
  name: z.string().min(1),
  code: z.string().min(1),
  instructor: z.string().min(1).optional()
});

export const scheduleEntrySchema = z.object({
  id: idSchema,
  classId: idSchema,
  weekday: z.number().min(0).max(6),
  startsAt: z.string().min(1),
  endsAt: z.string().min(1),
  location: z.string().min(1).optional()
});

export const createTaskRequestSchema = z.object({
  title: z.string().min(1),
  description: z.string().max(1000).optional(),
  dueDate: isoDateSchema.optional(),
  priority: z.nativeEnum(PriorityLevel),
  classId: idSchema.optional()
});

export const updateTaskStatusSchema = z.object({
  status: z.nativeEnum(TaskStatus)
});

export const createCalendarEventSchema = z.object({
  title: z.string().min(1),
  startsAt: isoDateSchema,
  endsAt: isoDateSchema,
  type: z.enum(['class', 'task', 'exam', 'personal'])
});

export const createExamSchema = z.object({
  classId: idSchema,
  title: z.string().min(1),
  startsAt: isoDateSchema,
  endsAt: isoDateSchema
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});
