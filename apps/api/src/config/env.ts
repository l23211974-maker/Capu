import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(4000),
  API_PREFIX: z.string().default('/api/v1'),
  AUTH_TOKEN_SECRET: z.string().min(8).default('replace_me_for_local_dev_only'),
  WEB_ORIGIN: z.string().url().default('http://localhost:5173')
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
