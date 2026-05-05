import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'S. R. Garcia and R. A. Horn, Matrix Mathematics',
      'S. R. Garcia and R. A. Horn, Matrix Mathematics, 2e',
      'S. R. Garcia and R. A. Horn, Matrix Mathematics, 2023',
      { unordered_author: [ 'S. R. Garcia', 'R. A. Horn' ], title: 'Matrix Mathematics' },
      { unordered_author: [ 'S. R. Garcia', 'R. A. Horn' ], title: 'Matrix Mathematics', date: 2023 },
      { unordered_author: [ 'S. R. Garcia', 'R. A. Horn' ], title: 'Matrix Mathematics', edition: 2 },
    ],
    material: {
      type: 'book',
      id: 'S. R. Garcia and R. A. Horn, Matrix Mathematics, 2e',
      title: 'Matrix Mathematics',
      author: [ { given: 'Stephan Ramon', family: 'Garcia' }, { given: 'Roger Alan', family: 'Horn' } ],
      edition: 2,
      issued: { 'date-parts': [ [ 2023, 9, 29 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      publisher: 'Cambridge University Press',
      'publisher-place': 'Cambridge',
      'collection-title': 'Cambridge Mathematical Textbooks',
      'number-of-pages': 490,
      DOI: '10.1017/9781108938426',
      URL: 'https://www.cambridge.org/highereducation/books/matrix-mathematics/3BBCFAFD942BAF6A0813763297D69E65',
      ISBN: '9781108938426' as CSL_Data.ISBN,
      language: 'en-GB',
      custom: {
        subtitle: 'A Second Course in Linear Algebra',
        Hardback: {
          type: 'book',
          id: '[Hardback] S. R. Garcia and R. A. Horn, Matrix Mathematics',
          issued: { 'date-parts': [ [ 2023, 5, 23 ] ] },
          ISBN: '9781108837101' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)