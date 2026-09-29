import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Algorithms',
      author: [
        { given: 'Thomas H.', family: 'Cormen' },
        { given: 'Charles E.', family: 'Leiserson' },
        { given: 'Ronald L.', family: 'Rivest' },
        { given: 'Clifford', family: 'Stein' },
      ],
      edition: 4,
      medium: 'Hardcover',
      publisher: 'The MIT Press',
      'publisher-place': 'Cambridge, MA',
      issued: { 'date-parts': [ [ 2022, 4, 5 ] ] },
      ISBN: '9780262046305',
      'number-of-pages': 1312,
      language: 'en-US',
      URL: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
