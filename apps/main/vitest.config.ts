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
        name: 'apps/main/src/html/internal_links.ts:with_base',
      },
      {
        name: 'apps/main/src/html/internal_links.ts:rewrite_HTML_links',
      },
      {
        name: 'apps/main/src/middleware.ts:onRequest',
      },
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
