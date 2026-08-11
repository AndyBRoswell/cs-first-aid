import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'Tom Mike', family: 'Apostol' } ],
      title: 'Mathematical Analysis: A Modern Approach to Advanced Calculus',
      edition: 2,
      publisher: 'Addison-Wesley',
      issued: { 'date-parts': [ [ 1974 ] ] },
      language: 'en-US',
      ISBN: '9780201002881' as CSL_Data.ISBN,
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/mathematical-analysis-a-modern-approach-to-advanced-calculus/P200000006077/9780201002881',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)