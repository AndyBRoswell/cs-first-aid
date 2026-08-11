import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
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
          issued: { 'date-parts': [ [ 2020, 11, 25 ], ], },
          ISBN: '9781292354873' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)