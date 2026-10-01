import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Data Compression',
      author: [ { given: 'Khalid', family: 'Sayood' } ],
      edition: 5,
      medium: 'eBook',
      publisher: 'Morgan Kaufmann',
      'publisher-place': 'Cambridge, MA',
      issued: { 'date-parts': [ [ 2017, 10, 23 ] ] },
      ISBN: '978-0-12-809705-2',
      DOI: '10.1016/C2015-0-06248-7',
      'collection-title': 'The Morgan Kaufmann Series in Multimedia Information and Systems',
      'number-of-pages': 790,
      language: 'en',
      URL: 'https://shop.elsevier.com/books/introduction-to-data-compression/sayood/978-0-12-809474-7',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '978-0-12-809474-7',
            issued: { 'date-parts': [ [ 2017, 10, 23 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
