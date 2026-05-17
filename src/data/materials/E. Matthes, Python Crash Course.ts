import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'E. Matthes, Python Crash Course, 3e',
      { unordered_author: 'E. Matthes', title: 'Python Crash Course', },
      { unordered_author: 'E. Matthes', title: 'Python Crash Course', date: 2022, },
      { unordered_author: 'E. Matthes', title: 'Python Crash Course', edition: 3, },
    ],
    material: {
      type: 'book',
      id: 'E. Matthes, Python Crash Course, 3e',
      title: 'Python Crash Course',
      author: [ { given: 'Eric', family: 'Matthes', } ],
      language: 'en-US',
      edition: 3,
      "number-of-pages": 552,
      publisher: 'No Starch Press',
      issued: { 'date-parts': [ [ 2022, 12 ], ], },
      accessed: { 'date-parts': [ [ 2026, 5, 13, ], ], },
      URL: 'https://nostarch.com/python-crash-course-3rd-edition',
      ISBN: '9781718502710' as CSL_Data.ISBN,
      custom: {
        subtitle: 'A Hands-On, Project-Based Introduction to Programming',
        Print: {
          type: 'book',
          id: 'E_Matthes_Python_Crash_Course_3_print',
          ISBN: '9781718502703' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)