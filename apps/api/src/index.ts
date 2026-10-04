import express from 'express';
import { appConfig } from './config/app-config.js';
import { errorHandler } from './middleware/error-handler.js';
import { requestLogger } from './middleware/logger.js';
import { authRouter } from './modules/auth/routes.js';
import { usersRouter } from './modules/users/routes.js';
import { classesRouter } from './modules/classes/routes.js';
import { tasksRouter } from './modules/tasks/routes.js';
import { calendarRouter } from './modules/calendar/routes.js';
import { examsRouter } from './modules/exams/routes.js';
import { notificationsRouter } from './modules/notifications/routes.js';

const app = express();

app.use(express.json());
app.use(requestLogger);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: appConfig.appName });
});

app.use(`${appConfig.apiPrefix}/auth`, authRouter);
app.use(`${appConfig.apiPrefix}/users`, usersRouter);
app.use(`${appConfig.apiPrefix}/classes`, classesRouter);
app.use(`${appConfig.apiPrefix}/tasks`, tasksRouter);
app.use(`${appConfig.apiPrefix}/calendar`, calendarRouter);
app.use(`${appConfig.apiPrefix}/exams`, examsRouter);
app.use(`${appConfig.apiPrefix}/notifications`, notificationsRouter);

app.use(errorHandler);

app.listen(appConfig.port, () => {
  console.info(`CAPU API listening on port ${appConfig.port}`);
});
