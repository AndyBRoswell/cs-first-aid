import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Linear Algebra and Its Applications',
      author: [ { given: 'David C.', family: 'Lay' }, { given: 'Steven R.', family: 'Lay' }, { given: 'Judi J.', family: 'McDonald' }, ],
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2021, 7, 14 ] ], },
      edition: 6,
      language: 'en-US',
      ISBN: '9781292351216',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/linear-algebra-and-its-applications-global-edition/P200000004712/9781292351216',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ], },
    },
  },
] satisfies types_data.Entry[]
