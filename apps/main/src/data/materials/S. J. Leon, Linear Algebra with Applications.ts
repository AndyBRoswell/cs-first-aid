import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
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
      ISBN: '9781292354866',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/linear-algebra-with-applications-global-edition/P200000004727/9781292354873',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
      custom: {
        eTextbook: {
          type: 'book',
          issued: { 'date-parts': [ [ 2020, 11, 25 ], ], },
          ISBN: '9781292354873',
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
