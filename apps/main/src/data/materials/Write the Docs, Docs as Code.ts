import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'Docs as Code', 'Docs-as-Code' ],
    material: {
      type: 'webpage',
      title: 'Docs as code',
      author: [ { literal: 'Write the Docs' } ],
      'container-title': 'Write the Docs',
      medium: 'Online',
      language: 'en',
      URL: 'https://www.writethedocs.org/guide/docs-as-code/',
      accessed: { 'date-parts': [ [ 2026, 11, 10 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.writethedocs.org/guide/docs-as-code/',
            display_text: 'HTML',
            'Content-Type': 'text/html',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
