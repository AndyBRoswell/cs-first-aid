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
      issued: { "date-parts": [ [ 2026, 4, 30 ] ] },
      URL: 'https://www.math.brown.edu/streil/papers/LADW/LADW.html',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/LADW_2026_04-30.html',
            display_text: 'HTML',
            license: 'CC-BY-NC-ND-3.0',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
