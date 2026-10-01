import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Handbook of Data Compression',
      author: [ { given: 'David', family: 'Salomon' }, { given: 'Giovanni', family: 'Motta' } ],
      edition: 5,
      medium: 'eBook',
      publisher: 'Springer London',
      issued: { 'date-parts': [ [ 2010, 1, 18 ] ] },
      ISBN: '978-1-84882-903-9',
      DOI: '10.1007/978-1-84882-903-9',
      'number-of-pages': 'XXII + 1361',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-1-84882-903-9',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      custom: {
        variant: [
          { type: 'book', medium: 'Hardcover', ISBN: '978-1-84882-902-2', issued: { 'date-parts': [ [ 2009, 11, 9 ] ] } },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
