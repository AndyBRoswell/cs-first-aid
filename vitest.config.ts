import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  test: {
    dir: 'tests/vitest',
    tags: [
      {
        name: '@citation-js/plugin-csl.output.citation',
      },
      {
        name: 'fast-cartesian',
      },
      {
        name: 'cssesc',
      },
      {
        name: 'IEEE.custom.csl',
      },
      {
        name: 'get_rendered_author.csl',
      },
      {
        name: 'src/data/materials/get_rendered_author.csl',
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@tests': path.resolve(import.meta.dirname, './tests'),
    },
  },
});