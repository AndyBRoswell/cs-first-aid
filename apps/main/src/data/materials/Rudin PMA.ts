import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
      'Rudin PMA',
      'Baby Rudin',
    ],
    material: {
      type: 'book',
      title: 'Principles of Mathematical Analysis',
      "title-short": 'PMA',
      author: [ { given: 'Walter', family: 'Rudin' } ],
      publisher: 'McGraw-Hill Education',
      issued: { 'date-parts': [ [ 1976, ] ] },
      edition: 3,
      ISBN: '9780070542358' as CSL_Data.ISBN,
      language: 'en-US',
      URL: 'https://www.goodreads.com/en/book/show/292079.Principles_of_Mathematical_Analysis',
      note: 'ISBN10: 007054234X/007054235X/0070856133',
    }
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)