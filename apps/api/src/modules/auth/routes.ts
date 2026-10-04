import { Router } from 'express';
import { loginSchema } from '@capu/validation';
import { validateBody } from '../../middleware/validate-request.js';
import { AuthController } from './controller.js';
import { AuthService } from './service.js';

const authRouter = Router();
const controller = new AuthController(new AuthService());

authRouter.post('/login', validateBody(loginSchema), controller.login);

export { authRouter };
