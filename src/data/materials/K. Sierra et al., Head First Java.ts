import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'K. Sierra, B. Bates, T. Gee, Head First Java, 3e',
      'K. Sierra, B. Bates, T. Gee, Head First Java, 3rd ed.',
      { unordered_author: [ 'K. Sierra', 'B. Bates', 'T. Gee' ], title: 'Head First Java', },
      { unordered_author: [ 'K. Sierra', 'B. Bates', 'T. Gee' ], title: 'Head First Java', edition: 3 },
      { unordered_author: [ 'K. Sierra', 'B. Bates', 'T. Gee' ], title: 'Head First Java', date: 2022 },
    ],
    material: {
      type: 'book',
      id: 'K. Sierra, B. Bates, T. Gee, Head First Java, 3e',
      title: 'Head First Java',
      author: [ { given: 'Kathy', family: 'Sierra' }, { given: 'Bert', family: 'Bates' }, { given: 'Trisha', family: 'Gee' } ],
      edition: 3,
      issued: { 'date-parts': [ [ 2022, 5, 12 ] ] },
      publisher: "O'Reilly Media",
      'publisher-place': 'Sebastopol, CA',
      'number-of-pages': 754,
      language: 'en-US',
      URL: 'https://www.oreilly.com/library/view/head-first-java/9781492091646/',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      ISBN: '978-1-491-91075-7' as CSL_Data.ISBN,
      custom: {
        Paperback: {
          type: 'book',
          id: '[Paperback] K. Sierra, B. Bates, T. Gee, Head First Java, 3e',
          ISBN: '978-1-491-91077-1' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        Kindle: {
          type: 'book',
          id: '[Kindle] K. Sierra, B. Bates, T. Gee, Head First Java, 3e',
          ISBN: '978-1491910757' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)