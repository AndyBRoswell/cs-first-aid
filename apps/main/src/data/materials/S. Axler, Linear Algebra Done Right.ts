import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'LADR',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Sheldon', family: 'Axler' } ],
      title: 'Linear Algebra Done Right',
      edition: 4,
      issued: { 'date-parts': [ [ 2026, 8, 16 ] ] },
      publisher: 'Springer',
      language: 'en-US',
      URL: 'https://linear.axler.net/index.html',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://linear.axler.net/LADR4e.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
            license: 'CC-BY-NC-4.0',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
