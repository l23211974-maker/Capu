import { Router } from 'express';
import { authGuard } from '../../middleware/auth-guard.js';
import { CalendarController } from './controller.js';
import { CalendarService } from './service.js';

const calendarRouter = Router();
const controller = new CalendarController(new CalendarService());

calendarRouter.get('/', authGuard, controller.list);

export { calendarRouter };
