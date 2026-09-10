import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'LADW',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Sergei Raimondovich', family: 'Treil' } ],
      title: 'Linear Algebra Done Wrong',
      language: 'en-US',
      issued: { "date-parts": [ [ 2026, 8, 31 ] ] },
      URL: 'https://sites.google.com/a/brown.edu/sergei-treil-homepage/linear-algebra-done-wrong',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_08-31/LADW_2026_08-31.html',
            display_text: 'HTML',
            license: 'CC-BY-NC-ND-3.0',
          },
          {
            link: 'https://www.math.brown.edu/~treil/papers/LADW/LADW_2026_08-31.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
            license: 'CC-BY-NC-ND-3.0',
          },
          {
            link: 'https://www.math.brown.edu/~treil/papers/LADW/LADW_2026_08-31-cropped.pdf',
            display_text: 'PDF (cropped)',
            'Content-Type': 'application/pdf',
            license: 'CC-BY-NC-ND-3.0',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
