import type { NextFunction, Request, Response } from 'express';

export const requestLogger = (req: Request, _res: Response, next: NextFunction): void => {
  console.info(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
};
