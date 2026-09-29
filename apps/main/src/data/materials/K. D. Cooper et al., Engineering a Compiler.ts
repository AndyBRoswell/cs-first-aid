import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Engineering a Compiler',
      author: [ { given: 'Keith D.', family: 'Cooper' }, { given: 'Linda', family: 'Torczon' } ],
      edition: 3,
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2022 ] ] },
      ISBN: '9780128154120',
      'number-of-pages': 848,
      language: 'en',
      URL: 'https://shop.elsevier.com/books/engineering-a-compiler/cooper/978-0-12-815412-0',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
