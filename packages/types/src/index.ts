export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin'
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done'
}

export enum PriorityLevel {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high'
}

export enum ReminderChannel {
  IN_APP = 'in_app',
  EMAIL = 'email'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  createdAt: string;
}

export interface Profile {
  userId: string;
  displayName: string;
  timezone: string;
}

export interface Class {
  id: string;
  name: string;
  code: string;
  instructor?: string;
}

export interface ScheduleEntry {
  id: string;
  classId: string;
  weekday: number;
  startsAt: string;
  endsAt: string;
  location?: string;
}

export interface Task {
  id: string;
  userId: string;
  classId?: string;
  title: string;
  description?: string;
  dueDate?: string;
  status: TaskStatus;
  priority: PriorityLevel;
}

export interface ExamEvent {
  id: string;
  classId: string;
  title: string;
  startsAt: string;
  endsAt: string;
}

export interface CalendarEvent {
  id: string;
  userId: string;
  title: string;
  startsAt: string;
  endsAt: string;
  type: 'class' | 'task' | 'exam' | 'personal';
}

export interface Reminder {
  id: string;
  userId: string;
  targetType: 'task' | 'exam' | 'event';
  targetId: string;
  remindAt: string;
  channel: ReminderChannel;
}
