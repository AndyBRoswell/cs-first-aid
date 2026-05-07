import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'D. C. Lay et al., Linear Algebra and Its Applications',
      'D. C. Lay et al., Linear Algebra and Its Applications, Global Edition',
      'D. C. Lay et al., Linear Algebra and Its Applications, Global Edition, 6e',
      'D. C. Lay et al., Linear Algebra and Its Applications, Global Edition, 2021',
      'D. C. Lay, S. R. Lay, and J. J. McDonald, Linear Algebra and Its Applications, Global Edition, 6th ed.',
      {
        unordered_author: [ 'D. C. Lay', 'S. R. Lay', 'J. J. McDonald' ],
        title: 'Linear Algebra and Its Applications, Global Edition',
        edition: 6,
      },
      {
        unordered_author: [ 'D. C. Lay', 'S. R. Lay', 'J. J. McDonald' ],
        title: 'Linear Algebra and Its Applications, Global Edition',
        date: 2021,
      },
      {
        unordered_author: [ 'D. C. Lay', 'S. R. Lay', 'J. J. McDonald' ],
        title: 'Linear Algebra and Its Applications, Global Edition',
      },
    ],
    material: {
      type: 'book',
      id: 'D. C. Lay, S. R. Lay, and J. J. McDonald, Linear Algebra and Its Applications, Global Edition, 6th ed.',
      title: 'Linear Algebra and Its Applications, Global Edition',
      author: [ { given: 'David C.', family: 'Lay' }, { given: 'Steven R.', family: 'Lay' }, { given: 'Judi J.', family: 'McDonald' }, ],
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2021, 7, 14 ] ], },
      edition: 6,
      language: 'en-US',
      ISBN: '9781292351216' as CSL_Data.ISBN,
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/linear-algebra-and-its-applications-global-edition/P200000004712/9781292351216',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ], },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)