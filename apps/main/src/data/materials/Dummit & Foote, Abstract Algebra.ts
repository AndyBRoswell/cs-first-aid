import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
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