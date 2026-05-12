import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'B. Stroustrup, A Tour of C++',
      'B. Stroustrup, A Tour of C++, 3e',
      'B. Stroustrup, A Tour of C++, 3rd ed.',
      { unordered_author: 'B. Stroustrup', title: 'A Tour of C++', },
      { unordered_author: 'B. Stroustrup', title: 'A Tour of C++', date: 2022, },
      { unordered_author: 'B. Stroustrup', title: 'A Tour of C++', edition: 3, },
    ],
    material: {
      type: 'book',
      id: 'B. Stroustrup, A Tour of C++, 3rd ed.',
      title: 'A Tour of C++',
      author: [ { given: 'Bjarne', family: 'Stroustrup', }, ],
      language: 'en-US',
      edition: 3,
      "number-of-pages": 254,
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2022, 9, 24, ], ], },
      accessed: { 'date-parts': [ [ 2026, 5, 12, ], ], },
      ISBN: '978-0-13-681648-5' as CSL_Data.ISBN,
      URL: 'https://www.stroustrup.com/tour3.html',
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)