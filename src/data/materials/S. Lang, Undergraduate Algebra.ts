import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      language: 'en-US',
      author: [ { given: 'Serge', family: 'Lang', } ],
      title: 'Undergraduate Algebra',
      edition: 3,
      publisher: 'Springer',
      "number-of-pages": 'XII, 389',
      'publisher-place': 'New York, NY',
      'collection-title': 'Undergraduate Texts in Mathematics',
      issued: { 'date-parts': [ [ 2006, 10, 31 ] ] },
      DOI: '10.1007/0-387-27475-8',
      ISBN: '9780387274751' as CSL_Data.ISBN,
      URL: 'https://link.springer.com/book/10.1007/0-387-27475-8',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      custom: {
        Hardcover: {
          type: 'book',
          ISBN: '9780387220253' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2005, 3, 21 ] ] },
        } satisfies Data_Type.Material,
        Softcover: {
          type: 'book',
          ISBN: '978-1-4419-1959-5' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2010, 11, 29 ] ] },
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)