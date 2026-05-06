import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'S. Lang, Linear Algebra',
      'S. Lang, Linear Algebra, 3e',
      'S. Lang, Linear Algebra, 1987',
      { unordered_author: 'S. Lang', title: 'Linear Algebra' },
      { unordered_author: 'S. Lang', title: 'Linear Algebra', date: 1987 },
      { unordered_author: 'S. Lang', title: 'Linear Algebra', edition: 3 },
    ] satisfies Data_Type.ID_t[],
    material: {
      type: 'book',
      id: 'S. Lang, "Linear Algebra," 3rd ed.',
      title: 'Linear Algebra',
      author: [ { given: 'Serge', family: 'Lang' } ],
      edition: 3,
      issued: { 'date-parts': [ [ 2013, 6, 29 ] ] },
      publisher: 'Springer',
      'publisher-place': 'New York, NY',
      "original-date": { "date-parts": [ [ 1971 ] ] },
      "original-publisher": "Addison-Wesley",
      'collection-title': 'Undergraduate Texts in Mathematics',
      ISSN: '0172-6056',
      DOI: '10.1007/978-1-4757-1949-9',
      ISBN: '978-1-4757-1949-9' as CSL_Data.ISBN,
      'number-of-pages': 'IX, 285',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-4757-1949-9',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      custom: {
        'collection-title-short': 'UTM',
        'E-ISSN': '2197-5604',
        Hardcover: {
          type: 'book',
          id: 'S. Lang, Linear Algebra, 3rd ed.',
          ISBN: '978-0-387-96412-6' as CSL_Data.ISBN,
          issued: { 'date-parts': [ [ 1987, 1, 26 ] ] },
        } satisfies Data_Type.Material,
        Softcover: {
          type: 'book',
          id: 'S. Lang, Linear Algebra, 3rd ed.',
          issued: { 'date-parts': [ [ 2010, 12, 1 ] ] },
          ISBN: '978-1-4419-3081-1' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        URL: [
          {
            link: 'https://link.springer.com/book/10.1007/978-1-4757-1949-9',
            display_text: 'SpringerLink',
          },
        ],
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)