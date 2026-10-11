import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Software Testing: Lecture Slides',
      author: [ { given: 'Dietmar', family: 'Pfahl' }, { given: 'Kristiina', family: 'Rahkema' } ],
      'collection-title': 'LTAT.05.006: Software Testing',
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'University of Tartu',
      'publisher-place': 'Tartu, Estonia',
      issued: { 'date-parts': [ [ 2026 ] ], season: 1 },
      'number-of-pages': 1262,
      language: 'en',
      note: 'Spring 2026 course collection; total page count covers 13 lecture PDFs and excludes supplementary readings. Some slides are reused from earlier years.',
      URL: 'https://courses.cs.ut.ee/2026/SWT2026/spring/Main/Loengud',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        URL: [
          {
            link: 'https://courses.cs.ut.ee/2026/SWT2026/spring/Main/HomePage',
            display_text: 'Course information',
            accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
