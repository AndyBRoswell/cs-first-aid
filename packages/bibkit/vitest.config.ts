import { defineConfig } from 'vitest/config';
import { readFile } from 'node:fs/promises'
import path from 'node:path';

export default defineConfig({
  plugins: [
    {
      name: 'csl-text',
      async load(id) {
        if (!id.endsWith('.csl')) { return }
        const content = await readFile(id, 'utf8')
        return {
          code: `export default ${JSON.stringify(content)}`,
          map: null,
        }
      },
    },
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