import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'A. Stellman et al., Head First C#',
      'A. Stellman et al., Head First C#, 5e',
      { unordered_author: [ 'A. Stellman', 'J. Greene' ], title: 'Head First C#' },
      { unordered_author: [ 'A. Stellman', 'J. Greene' ], title: 'Head First C#', edition: 5 },
      { unordered_author: [ 'A. Stellman', 'J. Greene' ], title: 'Head First C#', date: 2024 },
    ],
    material: {
      type: 'book',
      id: 'A. Stellman et al., Head First C#, 5e',
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
          id: '[Print] A. Stellman et al., Head First C#, 5e',
          ISBN: '9781098141783' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2024, 8, 13 ] ] },
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)