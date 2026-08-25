import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Professional C++',
      author: [ { given: 'Marc', family: 'Gregoire' } ],
      issued: { 'date-parts': [ [ 2024, 1 ] ] },
      edition: 6,
      publisher: 'Wiley',
      "number-of-pages": 1376,
      language: 'en-US',
      ISBN: '9781394193172' as CSL.ISBN,
      URL: 'https://www.wiley.com/en-us/Professional+C%2B%2B%2C+6th+Edition-p-9781394193172',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      custom: {
        Ebook: {
          type: 'book',
          ISBN: '9781394193189' as CSL.ISBN,
          URL: 'https://www.wiley.com/en-us/Professional+C%2B%2B%2C+6th+Edition-p-9781394193189',
          accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]