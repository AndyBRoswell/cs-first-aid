import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Head First C#',
      author: [ { given: 'Andrew', family: 'Stellman' }, { given: 'Jennifer', family: 'Greene' } ],
      language: 'en-US',
      edition: 5,
      issued: { 'date-parts': [ [ 2024, 8, 13 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      publisher: 'O\'Reilly Media',
      ISBN: '9781098141776' as CSL_Data.ISBN,
      URL: 'https://www.oreilly.com/library/view/head-first-c/9781098141776/',
      custom: {
        subtitle: `A Learner's Guide to Real-World Programming with C# and .NET`,
        Print: {
          type: 'book',
          ISBN: '9781098141783' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2024, 8, 13 ] ] },
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)