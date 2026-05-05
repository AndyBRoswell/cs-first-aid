import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'R. A. Horn and C. R. Johnson, Matrix Analysis',
      'R. A. Horn and C. R. Johnson, Matrix Analysis, 2e',
      'R. A. Horn and C. R. Johnson, Matrix Analysis, 2012',
      { unordered_author: [ 'R. A. Horn', 'C. R. Johnson' ], title: 'Matrix Analysis' },
      { unordered_author: [ 'R. A. Horn', 'C. R. Johnson' ], title: 'Matrix Analysis', date: 2012 },
      { unordered_author: [ 'R. A. Horn', 'C. R. Johnson' ], title: 'Matrix Analysis', edition: 2 },
    ],
    material: {
      type: 'book',
      id: 'R. A. Horn and C. R. Johnson, Matrix Analysis, 2e',
      author: [ { given: 'Roger Alan', family: 'Horn' }, { given: 'Charles Royal', family: 'Johnson' } ],
      title: 'Matrix Analysis',
      publisher: 'Cambridge University Press',
      issued: { 'date-parts': [ [ 2013, 4, 5 ] ] },
      edition: 2,
      ISBN: '9781139020411' as CSL_Data.ISBN,
      DOI: '10.1017/CBO9781139020411',
      language: 'en-US',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      custom: {
        Hardback: {
          type: 'book',
          id: '[Hardback] R. A. Horn and C. R. Johnson, Matrix Analysis, 2e',
          ISBN: '9780521839402' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        Paperback: {
          type: 'book',
          id: '[Paperback] R. A. Horn and C. R. Johnson, Matrix Analysis, 2e',
          ISBN: '9780521548236' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        URL: [
          {
            link: 'https://www.cambridge.org/highereducation/books/matrix-analysis/FDA3627DC2B9F5C3DF2FD8C3CC136B48',
            display_text: 'Cambridge Aspire',
          },
        ],
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)