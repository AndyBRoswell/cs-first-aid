import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'D. B. West, Introduction to Graph Theory',
      'D. B. West, Introduction to Graph Theory, 2e',
      { unordered_author: 'D. B. West', title: 'Introduction to Graph Theory', edition: 2, },
    ],
    material: {
      type: 'book',
      id: 'D. B. West, Introduction to Graph Theory, 2e',
      author: [ { given: 'Douglas Brent', family: 'West', }, ],
      title: 'Introduction to Graph Theory',
      edition: 2,
      issued: { 'date-parts': [ [ 2017, 2, 14 ], ], },
      "original-publisher": 'Prentice Hall',
      "original-date": { 'date-parts': [ [ 2001, ], ], },
      language: 'en-US',
      publisher: 'Pearson',
      ISBN: '9780131437371' as CSL_Data.ISBN,
      note: '3ed under development. See https://dwest.web.illinois.edu/ .'
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)