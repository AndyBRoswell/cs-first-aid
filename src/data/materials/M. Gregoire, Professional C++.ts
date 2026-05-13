import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'M. Gregoire, Professional C++',
      'M. Gregoire, Professional C++, 6e',
      'M. Gregoire, Professional C++, 6th ed.',
      { unordered_author: [ 'M. Gregoire' ], title: 'Professional C++' },
      { unordered_author: [ 'M. Gregoire' ], title: 'Professional C++', date: 2024 },
      { unordered_author: [ 'M. Gregoire' ], title: 'Professional C++', edition: 6 },
    ],
    material: {
      type: 'book',
      id: 'M. Gregoire, Professional C++, 6th ed.',
      title: 'Professional C++',
      author: [ { given: 'Marc', family: 'Gregoire' } ],
      issued: { 'date-parts': [ [ 2024, 1 ] ] },
      edition: 6,
      publisher: 'Wiley',
      "number-of-pages": 1376,
      language: 'en-US',
      ISBN: '9781394193172' as CSL_Data.ISBN,
      URL: 'https://www.wiley.com/en-us/Professional+C%2B%2B%2C+6th+Edition-p-9781394193172',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      custom: {
        Ebook: {
          type: 'book',
          id: '[E-Book] M. Gregoire, Professional C++, 6th ed.',
          ISBN: '9781394193189' as CSL_Data.ISBN,
          URL: 'https://www.wiley.com/en-us/Professional+C%2B%2B%2C+6th+Edition-p-9781394193189',
          accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  } satisfies Data_Type.Entry,
] satisfies Data_Type.Entry[]

catalog.add_items(items)