import type { Request, Response } from 'express';
import { ExamsService } from './service.js';

export class ExamsController {
  constructor(private readonly service: ExamsService) {}

  list = async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ exams: await this.service.list() });
  };
}
