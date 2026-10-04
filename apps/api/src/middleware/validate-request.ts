import type { NextFunction, Request, RequestHandler, Response } from 'express';
import type { ZodTypeAny } from 'zod';

export const validateBody = (schema: ZodTypeAny): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const parsed = schema.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({ message: 'Invalid request body', details: parsed.error.flatten() });
      return;
    }

    req.body = parsed.data;
    next();
  };
};
