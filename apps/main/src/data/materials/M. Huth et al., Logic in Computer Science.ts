import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

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
      ISBN: '9780511810275' as CSL.ISBN,
      URL: 'https://www.cambridge.org/highereducation/books/logic-in-computer-science/9022E2BE5E7C9F20D259F4A83986236C',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      language: 'en-GB',
      custom: {
        Paperback: {
          type: 'book',
          issued: { 'date-parts': [ [ 2004, 8, 26 ] ] },
          ISBN: '9780521543101' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

export { items as entries }