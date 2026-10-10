import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Art of Software Testing',
      author: [ { given: 'Glenford J.', family: 'Myers' }, { given: 'Corey', family: 'Sandler' }, { given: 'Tom', family: 'Badgett' } ],
      edition: 3,
      medium: 'Hardcover',
      publisher: 'John Wiley & Sons',
      issued: { 'date-parts': [ [ 2011, 11, 8 ] ] },
      ISBN: '9781118031964',
      'number-of-pages': 256,
      language: 'en',
      URL: 'https://books.google.com/books/about/The_Art_of_Software_Testing.html?id=RPNKYgEACAAJ',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'O-Book',
            issued: { 'date-parts': [ [ 2012, 1, 2 ] ] },
            DOI: '10.1002/9781119202486',
            ISBN: '9781119202486',
            URL: 'https://onlinelibrary.wiley.com/book/10.1002/9781119202486',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
