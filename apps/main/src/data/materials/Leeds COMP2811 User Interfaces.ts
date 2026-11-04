import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'COMP2811 Exercises',
      author: [ { given: 'Nick', family: 'Efford' } ],
      'collection-title': 'COMP2811: User Interfaces',
      genre: 'Practical exercises and code examples',
      language: 'en',
      URL: 'https://python33r.github.io/comp2811-exercises/',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      note: '8 very short exercises: 2 on C++, 6 on Qt 6 Widgets (C++17).',
      custom: {
        institution: 'University of Leeds',
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
