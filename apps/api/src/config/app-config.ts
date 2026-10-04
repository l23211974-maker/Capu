import { sharedConfig } from '@capu/config';
import { env } from './env.js';

export const appConfig = {
  appName: sharedConfig.appName,
  apiPrefix: env.API_PREFIX,
  port: env.PORT,
  webOrigin: env.WEB_ORIGIN
};
