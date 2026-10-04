import { Router } from 'express';
import { authGuard } from '../../middleware/auth-guard.js';
import { ClassesController } from './controller.js';
import { ClassesService } from './service.js';

const classesRouter = Router();
const controller = new ClassesController(new ClassesService());

classesRouter.get('/', authGuard, controller.list);

export { classesRouter };
