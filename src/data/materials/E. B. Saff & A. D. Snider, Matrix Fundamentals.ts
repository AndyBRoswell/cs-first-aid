import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'E. B. Saff and A. D. Snider, Matrix Fundamentals',
      'E. B. Saff and A. D. Snider, Matrix Fundamentals, 2e',
      'E. B. Saff and A. D. Snider, Matrix Fundamentals, 2025',
      { unordered_author: [ 'E. B. Saff', 'A. D. Snider' ], title: 'Matrix Fundamentals' },
      { unordered_author: [ 'E. B. Saff', 'A. D. Snider' ], title: 'Matrix Fundamentals', date: 2025 },
      { unordered_author: [ 'E. B. Saff', 'A. D. Snider' ], title: 'Matrix Fundamentals', edition: 2 },
    ],
    material: {
      type: 'book',
      id: 'E. B. Saff and A. D. Snider, Matrix Fundamentals, 2e',
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
      ISBN: '978-3-031-97222-5' as CSL_Data.ISBN,
      URL: 'https://link.springer.com/book/10.1007/978-3-031-97222-5',
      custom: {
        subtitle: 'From Equation Solving to Signal Processing',
        Softcover: {
          type: 'book',
          id: '[Softcover] E. B. Saff and A. D. Snider, Matrix Fundamentals, 2e',
          ISBN: '978-3-031-97221-8' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2025, 8, 1 ] ] },
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)