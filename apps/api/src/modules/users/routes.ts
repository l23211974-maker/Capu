import { Router } from 'express';
import { authGuard } from '../../middleware/auth-guard.js';
import { UsersController } from './controller.js';
import { UsersService } from './service.js';

const usersRouter = Router();
const controller = new UsersController(new UsersService());

usersRouter.get('/', authGuard, controller.list);

export { usersRouter };
