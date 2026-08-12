import { defineConfig } from 'vitest/config'
import path from 'node:path'
import * as Vite_plugin from './tools/Vite plugin.ts'

export default defineConfig({
  plugins: [
    Vite_plugin.csl_text(),
  ],
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
        name: 'IEEE.custom.csl',
      },
      {
        name: 'get_rendered_author.csl',
      },
      {
        name: 'src/get_rendered_author.csl',
      },
      {
        name: 'src/get_full_author_names.csl',
      },
      {
        name: 'ISBN',
      },
      {
        name: 'ISSN',
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