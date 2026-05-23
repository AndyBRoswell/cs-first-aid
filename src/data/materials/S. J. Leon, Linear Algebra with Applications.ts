import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'S. J. Leon et al., Linear Algebra with Applications',
      'S. J. Leon and L. de Pillis, Linear Algebra with Applications',
      'S. J. Leon and L. de Pillis, Linear Algebra with Applications, 10e',
      'S. J. Leon and L. de Pillis, Linear Algebra with Applications, 2020',
      { unordered_author: [ 'S. J. Leon', 'L. de Pillis' ], title: 'Linear Algebra with Applications', },
      { unordered_author: [ 'S. J. Leon', 'L. de Pillis' ], title: 'Linear Algebra with Applications', date: 2020, },
      { unordered_author: [ 'S. J. Leon', 'L. de Pillis' ], title: 'Linear Algebra with Applications', edition: 10, },
    ],
    material: {
      type: 'book',
      id: 'S. J. Leon and L. de Pillis, Linear Algebra with Applications, Global Edition, 10',
      title: 'Linear Algebra with Applications, Global Edition',
      author: [ { given: 'Steven J.', family: 'Leon' }, { given: 'Lisette G.', "non-dropping-particle": 'de', family: 'Pillis' } ],
      language: 'en-GB',
      edition: 10,
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2021, 3, 1 ], ], },
      ISBN: '9781292354866' as CSL_Data.ISBN,
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/linear-algebra-with-applications-global-edition/P200000004727/9781292354873',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
      custom: {
        eTextbook: {
          type: 'book',
          id: '[eTextbook] S. J. Leon and L. de Pillis, Linear Algebra with Applications, 10e',
          issued: { 'date-parts': [ [ 2020, 11, 25 ], ], },
          ISBN: '9781292354873' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)