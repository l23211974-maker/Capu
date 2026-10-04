import { Router } from 'express';
import { createTaskRequestSchema } from '@capu/validation';
import { authGuard } from '../../middleware/auth-guard.js';
import { validateBody } from '../../middleware/validate-request.js';
import { TasksController } from './controller.js';
import { TasksService } from './service.js';

const tasksRouter = Router();
const controller = new TasksController(new TasksService());

tasksRouter.get('/', authGuard, controller.list);
tasksRouter.post('/', authGuard, validateBody(createTaskRequestSchema), controller.create);

export { tasksRouter };
