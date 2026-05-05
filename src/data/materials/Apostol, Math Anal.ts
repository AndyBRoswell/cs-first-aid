import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Apostol, Math Anal',
      'Apostol, Math Anal, 2e',
      'Apostol, Mathematical Analysis',
      'Apostol, Mathematical Analysis, 2e',
      { unordered_author: 'Apostol', title: 'Mathematical Analysis', },
      { unordered_author: 'Apostol', title: 'Mathematical Analysis', edition: 2, },
      { unordered_author: 'Apostol', title: 'Mathematical Analysis', date: 1974, },
    ],
    material: {
      type: 'book',
      id: 'Apostol, Mathematical Analysis',
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