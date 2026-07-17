import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    dir: 'tests/vitest',
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@tests': path.resolve(import.meta.dirname, './tests'),
    },
  },
});