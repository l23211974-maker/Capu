import type { Request, Response } from 'express';
import { NotificationsService } from './service.js';

export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  list = async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ reminders: await this.service.list() });
  };
}
