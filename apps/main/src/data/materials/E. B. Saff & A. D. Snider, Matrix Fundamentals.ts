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
      author: [ { given: 'Edward Barry', family: 'Saff' }, { given: 'Arthur David', family: 'Snider' } ],
      title: 'Matrix Fundamentals',
      publisher: 'Springer',
      'publisher-place': 'Cham',
      'collection-title': 'Springer Undergraduate Mathematics Series',
      edition: 2,
      'number-of-pages': 'XI, 392',
      issued: { 'date-parts': [ [ 2025, 7, 31 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      DOI: '10.1007/978-3-031-97222-5',
      ISBN: '978-3-031-97222-5' as CSL.ISBN,
      URL: 'https://link.springer.com/book/10.1007/978-3-031-97222-5',
      custom: {
        subtitle: 'From Equation Solving to Signal Processing',
        Softcover: {
          type: 'book',
          ISBN: '978-3-031-97221-8' as CSL.ISBN,
          issued: { 'date-parts': [ [ 2025, 8, 1 ] ] },
        } satisfies types_data.Material,
      } satisfies CSL_Data.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

catalog.add_items(items)