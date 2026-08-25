import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ] satisfies types_data.ID_t[],
    material: {
      type: 'book',
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
      ISBN: '978-1-4757-1949-9' as CSL.ISBN,
      'number-of-pages': 'IX, 285',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-4757-1949-9',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      custom: {
        'collection-title-short': 'UTM',
        'E-ISSN': '2197-5604',
        Hardcover: {
          type: 'book',
          ISBN: '978-0-387-96412-6' as CSL.ISBN,
          issued: { 'date-parts': [ [ 1987, 1, 26 ] ] },
        } satisfies types_data.Material,
        Softcover: {
          type: 'book',
          issued: { 'date-parts': [ [ 2010, 12, 1 ] ] },
          ISBN: '978-1-4419-3081-1' as CSL.ISBN,
        } satisfies types_data.Material,
        URL: [
          {
            link: 'https://link.springer.com/book/10.1007/978-1-4757-1949-9',
            display_text: 'SpringerLink',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]