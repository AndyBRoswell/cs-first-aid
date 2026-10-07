import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'An Introduction to Statistical Signal Processing',
      author: [ { given: 'Robert M.', family: 'Gray' }, { given: 'Lee D.', family: 'Davisson' } ],
      publisher: 'Cambridge University Press',
      issued: { 'date-parts': [ [ 2011, 1, 4 ] ] },
      language: 'en',
      URL: 'https://ee.stanford.edu/~gray/sp.html',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://ee.stanford.edu/~gray/sp.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
            modified: { 'date-parts': [ [ 2011, 1, 4 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
