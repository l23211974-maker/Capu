import { Router } from 'express';
import { authGuard } from '../../middleware/auth-guard.js';
import { NotificationsController } from './controller.js';
import { NotificationsService } from './service.js';

const notificationsRouter = Router();
const controller = new NotificationsController(new NotificationsService());

notificationsRouter.get('/', authGuard, controller.list);

export { notificationsRouter };
