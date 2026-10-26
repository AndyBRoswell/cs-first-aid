import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: '6.102: Software Construction',
      author: [ { literal: 'MIT 6.102 Course Staff' } ],
      genre: 'Lecture notes',
      medium: 'HTML',
      publisher: 'Massachusetts Institute of Technology',
      issued: { 'date-parts': [ [ 2026 ] ], season: 1 },
      version: 'Spring 2026',
      language: 'en',
      URL: 'https://web.mit.edu/6.102/www/sp26/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        lecturer: [ { given: 'Max', family: 'Goldman' }, { given: 'Mitchell', family: 'Gordon' }, { given: 'Rob', family: 'Miller' } ],
        free_material: [
          { link: 'https://web.mit.edu/6.102/www/sp26/#readings', display_text: 'Readings (HTML)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
