import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Advanced Compiler Design and Implementation',
      author: [ { given: 'Steven S.', family: 'Muchnick' } ],
      edition: 1,
      medium: 'Hardcover',
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 1997 ] ] },
      ISBN: '9781558603202',
      'number-of-pages': 856,
      language: 'en',
      URL: 'https://shop.elsevier.com/books/advanced-compiler-design-and-implementation/muchnick/978-0-08-049871-3',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
