import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'M. Huth and M. Ryan, Logic in Computer Science',
      'M. Huth and M. Ryan, Logic in Computer Science, 2e',
      'M. Huth and M. Ryan, Logic in Computer Science, 2e, 2004',
      { unordered_author: [ 'M. Huth', 'M. Ryan' ], title: 'Logic in Computer Science', edition: 2, },
      { unordered_author: [ 'M. Huth', 'M. Ryan' ], title: 'Logic in Computer Science', date: 2004, },
    ],
    material: {
      type: 'book',
      id: 'M. Huth and M. Ryan, Logic in Computer Science, 2e',
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
          id: '[Paperback] M. Huth and M. Ryan, Logic in Computer Science, 2e',
          issued: { 'date-parts': [ [ 2004, 8, 26 ] ] },
          ISBN: '9780521543101' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)