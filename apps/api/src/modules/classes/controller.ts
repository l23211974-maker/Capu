import type { Request, Response } from 'express';
import { ClassesService } from './service.js';

export class ClassesController {
  constructor(private readonly service: ClassesService) {}

  list = async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json(await this.service.list());
  };
}
