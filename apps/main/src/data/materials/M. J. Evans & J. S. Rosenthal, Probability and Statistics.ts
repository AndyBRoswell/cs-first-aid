import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Probability and Statistics',
      author: [ { given: 'Michael J.', family: 'Evans' }, { given: 'Jeffrey S.', family: 'Rosenthal' } ],
      edition: 2,
      publisher: 'W. H. Freeman',
      issued: { 'date-parts': [ [ 2010 ] ] },
      language: 'en',
      URL: 'https://utstat.utoronto.ca/mikevans/jeffrosenthal/',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
      custom: {
        subtitle: 'The Science of Uncertainty',
        free_material: [
          {
            link: 'https://utstat.utoronto.ca/mikevans/jeffrosenthal/book.pdf',
            display_text: 'PDF (August 2024 revision)',
            'Content-Type': 'application/pdf',
            modified: { 'date-parts': [ [ 2024, 8 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
