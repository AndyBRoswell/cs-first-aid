import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
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
      ISBN: '978-1-491-91075-7' as CSL.ISBN,
      custom: {
        Paperback: {
          type: 'book',
          ISBN: '978-1-491-91077-1' as CSL.ISBN,
        } satisfies types_data.Material,
        Kindle: {
          type: 'book',
          ISBN: '978-1491910757' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]