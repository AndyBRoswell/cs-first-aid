import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Algebra',
      author: [ { given: 'Serge', family: 'Lang' } ],
      publisher: 'Springer',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2012, 12, 6 ] ] },
      "original-publisher": "Addison-Wesley",
      "original-date": { "date-parts": [ [ 1993 ] ] },
      edition: 3,
      language: 'en-US',
      "number-of-pages": 'XV, 914',
      DOI: '10.1007/978-1-4613-0041-0',
      ISBN: '9781461300410' as CSL_Data.ISBN,
      URL: 'https://link.springer.com/book/10.1007/978-1-4613-0041-0',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      'collection-title': 'Graduate Texts in Mathematics',
      'collection-number': 211,
      custom: {
        Hardcover: {
          type: 'book',
          ISBN: '9780387953854' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2002, 1, 8 ] ] },
        } satisfies Data_Type.Material,
        Softcover: {
          type: 'book',
          ISBN: '978-1-4612-6551-1' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 2012, 11, 10 ] ] },
        } satisfies Data_Type.Material,
        "collection-title-short": 'GTM',
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)