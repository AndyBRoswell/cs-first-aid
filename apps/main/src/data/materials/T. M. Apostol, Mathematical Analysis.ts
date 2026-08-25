import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
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
      ISBN: '9780201002881',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/mathematical-analysis-a-modern-approach-to-advanced-calculus/P200000006077/9780201002881',
    },
  },
] satisfies types_data.Entry[]
