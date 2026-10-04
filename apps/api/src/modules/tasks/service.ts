import { PriorityLevel, TaskStatus, type Task } from '@capu/types';
import { repositories } from '../../database/repositories.js';
import type { CreateTaskRequest } from './types.js';

export class TasksService {
  async list(): Promise<Task[]> {
    return repositories.tasks.list();
  }

  async create(payload: CreateTaskRequest): Promise<Task> {
    const task: Task = {
      id: crypto.randomUUID(),
      userId: 'user-placeholder',
      classId: payload.classId,
      title: payload.title,
      description: payload.description,
      dueDate: payload.dueDate,
      status: TaskStatus.TODO,
      priority: payload.priority === 'high' ? PriorityLevel.HIGH : payload.priority === 'medium' ? PriorityLevel.MEDIUM : PriorityLevel.LOW
    };

    return repositories.tasks.create(task);
  }
}
