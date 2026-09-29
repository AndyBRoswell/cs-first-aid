import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Automata and Computability',
      author: [ { given: 'Dexter C.', family: 'Kozen' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Springer New York',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2012, 12, 6 ] ] },
      'original-date': { 'date-parts': [ [ 1997 ] ] },
      ISBN: '978-1-4612-1844-9',
      DOI: '10.1007/978-1-4612-1844-9',
      'collection-title': 'Undergraduate Texts in Computer Science',
      'number-of-pages': 'XIII + 400',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-1-4612-1844-9',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        topic: [ 'Computation by Abstract Devices', 'Algorithm Analysis and Problem Complexity' ],
        'eBook packages': 'Springer Book Archive',
        'collection-title-short': 'UTCS',
        variant: [
          { type: 'book', medium: 'Hardcover', ISBN: '978-0-387-94907-9', issued: { 'date-parts': [ [ 1997, 4, 30 ] ] } },
          { type: 'book', medium: 'Softcover', ISBN: '978-1-4612-7309-7', issued: { 'date-parts': [ [ 2012, 10, 13 ] ] } },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
