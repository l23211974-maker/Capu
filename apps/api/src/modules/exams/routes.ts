import { Router } from 'express';
import { authGuard } from '../../middleware/auth-guard.js';
import { ExamsController } from './controller.js';
import { ExamsService } from './service.js';

const examsRouter = Router();
const controller = new ExamsController(new ExamsService());

examsRouter.get('/', authGuard, controller.list);

export { examsRouter };
