import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Probability',
      author: [ { given: 'Charles M.', family: 'Grinstead' }, { given: 'J. Laurie', family: 'Snell' } ],
      edition: 2,
      medium: 'PDF',
      publisher: 'The CHANCE Project',
      issued: { 'date-parts': [ [ 2006, 7, 4 ] ] },
      language: 'en',
      URL: 'https://math.dartmouth.edu/~prob/prob/prob.pdf',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            edition: 2,
            medium: 'Hardback',
            publisher: 'American Mathematical Society',
            issued: { 'date-parts': [ [ 1997 ] ] },
            ISBN: '9780821807491',
            'number-of-pages': 510,
            URL: 'https://works.swarthmore.edu/fac-math-stat/153/',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
            custom: { edition: 'Second Revised Edition' },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
