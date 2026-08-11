import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Logic in Computer Science: Modelling and Reasoning about Systems',
      author: [ { family: 'Huth', given: 'Michael' }, { family: 'Ryan', given: 'Mark' } ],
      issued: { 'date-parts': [ [ 2012, 6, 5 ] ] },
      "original-date": { "date-parts": [ [ 2004, 8, 26 ] ] },
      edition: 2,
      publisher: 'Cambridge University Press',
      "number-of-pages": 440,
      ISBN: '9780511810275' as CSL_Data.ISBN,
      URL: 'https://www.cambridge.org/highereducation/books/logic-in-computer-science/9022E2BE5E7C9F20D259F4A83986236C',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      language: 'en-GB',
      custom: {
        Paperback: {
          type: 'book',
          issued: { 'date-parts': [ [ 2004, 8, 26 ] ] },
          ISBN: '9780521543101' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)