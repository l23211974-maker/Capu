import type { Request, Response } from 'express';
import { UsersService } from './service.js';

export class UsersController {
  constructor(private readonly service: UsersService) {}

  list = async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json(await this.service.listUsers());
  };
}
