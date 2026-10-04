import type { Request, Response } from 'express';
import { CalendarService } from './service.js';

export class CalendarController {
  constructor(private readonly service: CalendarService) {}

  list = async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ events: await this.service.list() });
  };
}
