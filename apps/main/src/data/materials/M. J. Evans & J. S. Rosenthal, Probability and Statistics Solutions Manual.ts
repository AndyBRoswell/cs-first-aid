import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Instructor’s Solutions Manual for Probability and Statistics',
      author: [ { given: 'Michael J.', family: 'Evans' }, { given: 'Jeffrey S.', family: 'Rosenthal' } ],
      edition: 2,
      medium: 'PDF',
      language: 'en',
      URL: 'https://utstat.utoronto.ca/mikevans/jeffrosenthal/',
      accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
      custom: {
        subtitle: 'The Science of Uncertainty',
        free_material: [
          {
            link: 'https://utstat.utoronto.ca/mikevans/jeffrosenthal/EvansRosenthalsolutions.pdf',
            display_text: 'Solutions Manual (PDF)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
