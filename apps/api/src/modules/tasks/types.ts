import type { Task } from '@capu/types';

export interface CreateTaskRequest {
  title: string;
  description?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  classId?: string;
}

export interface TaskListResponse {
  items: Task[];
}
