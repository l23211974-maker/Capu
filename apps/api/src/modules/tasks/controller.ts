import type { Request, Response } from 'express';
import { TasksService } from './service.js';

export class TasksController {
  constructor(private readonly service: TasksService) {}

  list = async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ items: await this.service.list() });
  };

  create = async (req: Request, res: Response): Promise<void> => {
    res.status(201).json(await this.service.create(req.body));
  };
}
