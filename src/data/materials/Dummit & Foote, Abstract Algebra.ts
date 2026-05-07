import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'D. S. Dummit and R. M. Foote, Abstract Algebra',
      'D. S. Dummit and R. M. Foote, Abstract Algebra, 3e',
      'D. S. Dummit and R. M. Foote, Abstract Algebra, 2003',
      { unordered_author: [ 'D. S. Dummit', 'R. M. Foote' ], title: 'Abstract Algebra', },
      { unordered_author: [ 'D. S. Dummit', 'R. M. Foote' ], title: 'Abstract Algebra', date: 2003, },
      { unordered_author: [ 'D. S. Dummit', 'R. M. Foote' ], title: 'Abstract Algebra', edition: 3, },
    ],
    material: {
      type: 'book',
      id: 'D. S. Dummit and R. M. Foote, Abstract Algebra, 3e',
      title: 'Abstract Algebra',
      author: [ { given: 'David Steven', family: 'Dummit' }, { given: 'Richard M.', family: 'Foote' } ],
      publisher: 'Wiley',
      edition: 3,
      issued: { 'date-parts': [ [ 2003, 7, ] ] },
      language: 'en-US',
      ISBN: '9780471433347' as CSL_Data.ISBN,
      URL: 'https://www.wiley.com/en-us/Abstract+Algebra%2C+3rd+Edition-p-9780471433347',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)