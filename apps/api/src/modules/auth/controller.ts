import type { Request, Response } from 'express';
import { AuthService } from './service.js';

export class AuthController {
  constructor(private readonly service: AuthService) {}

  login = async (req: Request, res: Response): Promise<void> => {
    const response = await this.service.login(req.body);
    res.status(200).json(response);
  };
}
