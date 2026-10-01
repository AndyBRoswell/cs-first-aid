import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      language: 'en-US',
      author: [ { given: 'John M.', family: 'Harris' }, { given: 'Jeffry L.', family: 'Hirst' }, { given: 'Michael John', family: 'Mossinghoff' } ],
      issued: { 'date-parts': [ [ 2009, 4, 3 ] ] },
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      title: 'Combinatorics and Graph Theory',
      publisher: 'Springer',
      "publisher-place": 'New York, NY',
      "collection-title": 'Undergraduate Texts in Mathematics',
      edition: 2,
      "number-of-pages": 'XV, 381',
      DOI: '10.1007/978-0-387-79711-3',
      URL: 'https://link.springer.com/book/10.1007/978-0-387-79711-3',
      ISBN: '9780387797113',
      custom: {
        keyword: [ 'Addition', 'Combinatorics', 'Counting', 'Graph', 'Graph Theory', 'Hamiltonian path', 'pigeonhole principle' ],
        topic: [ 'Discrete Mathematics', 'Combinatorics', 'Mathematical Logic and Foundations' ],
        'eBook packages': [ 'Mathematics and Statistics', 'Mathematics and Statistics (R0)' ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            issued: { "date-parts": [ [ 2008, 9, 19 ] ] },
            ISBN: '9780387797106',
          },
          {
            type: 'book',
            medium: 'Softcover',
            issued: { "date-parts": [ [ 2010, 12, 1 ] ] },
            ISBN: '978-1-4419-2723-1',
          },
        ],
        "collection-title-short": 'UTM',
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
