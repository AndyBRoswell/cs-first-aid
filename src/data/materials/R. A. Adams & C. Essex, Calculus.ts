import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Calculus: A Complete Course',
    ],
    material: {
      type: 'book',
      id: 'Calculus: A Complete Course',
      author: [ { given: 'Robert A.', family: 'Adams', }, { given: 'Christopher', family: 'Essex', }, ],
      title: 'Calculus: A Complete Course',
      edition: 10,
      publisher: 'Pearson',
      "publisher-place": 'Toronto, ON',
      issued: { "date-parts": [ [ 2021, 1, 4 ] ] },
      "number-of-pages": 1200,
      ISBN: '9780135766781' as CSL_Data.ISBN,
      language: 'en-CA',
      URL: 'https://www.pearson.com/en-ca/subject-catalog/p/calculus-a-complete-course/P200000002479/9780135766781',
      accessed: { "date-parts": [ [ 2026, 4, 2 ], ], },
      note: 'Printed ver 9780135732588',
      custom: {
        Print: {
          type: 'book',
          id: '[Printed] Calculus: A Complete Course',
          issued: { "date-parts": [ [ 2021, 1, 26 ], ], },
          ISBN: '9780135732588' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    }
  }
] satisfies Data_Type.Entry[]

catalog.add_items(items)