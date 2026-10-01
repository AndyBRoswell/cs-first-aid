import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Data Compression',
      author: [ { given: 'Khalid', family: 'Sayood' } ],
      edition: 5,
      medium: 'Paperback',
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2017, 10, 23 ] ] },
      ISBN: '978-0-12-809474-7',
      DOI: '10.1016/C2015-0-06248-7',
      'collection-title': 'The Morgan Kaufmann Series in Multimedia Information and Systems',
      language: 'en',
      URL: 'https://shop.elsevier.com/books/introduction-to-data-compression/sayood/978-0-12-809474-7',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
