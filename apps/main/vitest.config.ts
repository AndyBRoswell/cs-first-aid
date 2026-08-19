import { defineConfig } from 'vitest/config'
import * as Vite_plugin from '@cs-first-aid/bibkit/tools/Vite plugin'

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
      {
        name: 'src/data/materials/get_full_author_names.csl',
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
    tsconfigPaths: true,
  },
});
