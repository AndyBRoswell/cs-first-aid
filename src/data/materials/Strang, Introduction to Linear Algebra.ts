import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'ILA',
      'ILA6',
      'Introduction to Linear Algebra',
    ],
    material: {
      type: 'book',
      id: 'Strang, Introduction to Linear Algebra, 6e',
      author: [ { given: 'William Gilbert', family: 'Strang' } ],
      title: 'Introduction to Linear Algebra',
      edition: 6,
      issued: { 'date-parts': [ [ 2023 ] ] },
      publisher: 'Wellesley-Cambridge Press',
      ISBN: '978-1-7331466-7-8' as CSL_Data.ISBN,
      language: 'en-US',
      URL: 'https://math.mit.edu/~gs/linearalgebra/ila6/indexila6.html',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)