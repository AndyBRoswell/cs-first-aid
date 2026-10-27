import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: '17-313: Foundations of Software Engineering',
      author: [ { given: 'Michael', family: 'Hilton' }, { given: 'Joshua', family: 'Sunshine' } ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Carnegie Mellon University',
      issued: { 'date-parts': [ [ 2026 ] ], season: 1 },
      version: 'Spring 2026',
      language: 'en',
      URL: 'https://cmu-313.github.io/_old/S26/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        free_material: [
          { link: 'https://cmu-313.github.io/_old/S26/#weekly-schedule', display_text: 'Lecture slides (PDF)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
