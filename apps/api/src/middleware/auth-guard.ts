import type { NextFunction, Request, Response } from 'express';

export const authGuard = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ message: 'Missing authorization header' });
    return;
  }

  next();
};
