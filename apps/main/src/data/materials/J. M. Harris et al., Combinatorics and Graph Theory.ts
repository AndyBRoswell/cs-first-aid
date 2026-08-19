import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
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
      ISBN: '9780387797113' as CSL.ISBN,
      custom: {
        Hardcover: {
          type: 'book',
          issued: { "date-parts": [ [ 2008, 9, 19 ] ] },
          ISBN: '9780387797106' as CSL.ISBN,
        } satisfies types_data.Material,
        Softcover: {
          type: 'book',
          issued: { "date-parts": [ [ 2010, 12, 1 ] ] },
          ISBN: '978-1-4419-2723-1' as CSL.ISBN,
        } satisfies types_data.Material,
        "collection-title-short": 'UTM',
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)