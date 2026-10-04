import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@capu/types': resolve(import.meta.dirname, 'packages/types/src/index.ts'),
      '@capu/validation': resolve(import.meta.dirname, 'packages/validation/src/index.ts'),
      '@capu/config': resolve(import.meta.dirname, 'packages/config/src/index.ts')
    }
  },
  test: {
    include: ['tests/**/*.test.ts']
  }
});
