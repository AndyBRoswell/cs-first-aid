import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'J. M. Harris et al., Combinatorics and Graph Theory',
      'J. M. Harris, J. L. Hirst, and M. J. Mossinghoff, Combinatorics and Graph Theory',
      'J. M. Harris, J. L. Hirst, and M. J. Mossinghoff, Combinatorics and Graph Theory, 2e',
      'J. M. Harris, J. L. Hirst, and M. J. Mossinghoff, Combinatorics and Graph Theory, 2008',
      { unordered_author: [ 'J. M. Harris', 'J. L. Hirst', 'M. J. Mossinghoff' ], title: 'Combinatorics and Graph Theory', edition: 2, },
      { unordered_author: [ 'J. M. Harris', 'J. L. Hirst', 'M. J. Mossinghoff' ], title: 'Combinatorics and Graph Theory', date: 2008, },
      { unordered_author: [ 'J. M. Harris', 'J. L. Hirst', 'M. J. Mossinghoff' ], title: 'Combinatorics and Graph Theory', },
    ],
    material: {
      type: 'book',
      id: 'J. M. Harris, J. L. Hirst, and M. J. Mossinghoff, Combinatorics and Graph Theory, 2e',
      language: 'en-US',
      author: [ { given: 'John M.', family: 'Harris' }, { given: 'Jeffry L.', family: 'Hirst' }, { given: 'Michael John', family: 'Mossinghoff' } ],
      issued: { 'date-parts': [ [ 2009, 4, 3 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      title: 'Combinatorics and Graph Theory',
      publisher: 'Springer',
      "publisher-place": 'New York, NY',
      "collection-title": 'Undergraduate Texts in Mathematics',
      edition: 2,
      "number-of-pages": 'XV, 381',
      DOI: '10.1007/978-0-387-79711-3',
      URL: 'https://link.springer.com/book/10.1007/978-0-387-79711-3',
      ISBN: '9780387797113' as CSL_Data.ISBN,
      custom: {
        Hardcover: {
          type: 'book',
          id: '[Hardcover] J. M. Harris, J. L. Hirst, and M. J. Mossinghoff, Combinatorics and Graph Theory, 2nd ed.',
          issued: { "date-parts": [ [ 2008, 9, 19 ] ] },
          ISBN: '9780387797106' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        Softcover: {
          type: 'book',
          id: '[Softcover] J. M. Harris, J. L. Hirst, and M. J. Mossinghoff, Combinatorics and Graph Theory, 2nd ed.',
          issued: { "date-parts": [ [ 2010, 12, 1 ] ] },
          ISBN: '978-1-4419-2723-1' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        "collection-title-short": 'UTM',
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)