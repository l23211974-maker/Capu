import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { loginSchema } from '@capu/validation';
import { validateBody } from '../../middleware/validate-request.js';
import { AuthController } from './controller.js';
import { AuthService } from './service.js';

const authRouter = Router();
const controller = new AuthController(new AuthService());
const loginRateLimiter = rateLimit({
  windowMs: 60_000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many authentication attempts. Please retry later.' }
});

authRouter.post('/login', loginRateLimiter, validateBody(loginSchema), controller.login);

export { authRouter };
