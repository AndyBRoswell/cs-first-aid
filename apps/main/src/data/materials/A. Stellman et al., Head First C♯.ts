import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

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
      ISBN: '9781098141776' as CSL.ISBN,
      URL: 'https://www.oreilly.com/library/view/head-first-c/9781098141776/',
      custom: {
        subtitle: `A Learner's Guide to Real-World Programming with C# and .NET`,
        Print: {
          type: 'book',
          ISBN: '9781098141783' as CSL.ISBN,
          issued: { 'date-parts': [ [ 2024, 8, 13 ] ] },
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

export { items as entries }