import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'K&R C', ],
    material: {
      type: 'book',
      title: 'The C Programming Language',
      author: [
        { given: 'Brian W.', family: 'Kernighan' },
        { given: 'Dennis M.', family: 'Ritchie' },
      ],
      edition: 2,
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 1988, 3, 22 ] ] },
      ISBN: '9780131103627',
      language: 'en-US',
      URL: 'https://www.informit.com/store/c-programming-language-9780131103627',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
