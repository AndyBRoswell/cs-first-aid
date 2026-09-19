import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Terence', family: 'Tao' } ],
      title: 'Analysis',
      volume: 1,
      'number-of-volumes': 2,
      edition: 4,
      publisher: 'Springer',
      'publisher-place': 'Singapore',
      issued: { 'date-parts': [ [ 2023, 2, 22 ] ] },
      'number-of-pages': 340,
      'collection-title': 'Texts and Readings in Mathematics',
      'collection-number': 37,
      ISBN: '978-981-19-7261-4',
      DOI: '10.1007/978-981-19-7261-4',
      URL: 'https://link.springer.com/book/10.1007/978-981-19-7261-4',
      accessed: { 'date-parts': [ [ 2026, 9, 19 ] ] },
      language: 'en-US',
      custom: {
        'collection-title-short': 'TRIM',
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Terence', family: 'Tao' } ],
      title: 'Analysis',
      volume: 2,
      'number-of-volumes': 2,
      edition: 4,
      publisher: 'Springer',
      'publisher-place': 'Singapore',
      issued: { 'date-parts': [ [ 2023, 2, 22 ] ] },
      'number-of-pages': 210,
      'collection-title': 'Texts and Readings in Mathematics',
      'collection-number': 38,
      ISBN: '978-981-19-7284-3',
      DOI: '10.1007/978-981-19-7284-3',
      URL: 'https://link.springer.com/book/10.1007/978-981-19-7284-3',
      accessed: { 'date-parts': [ [ 2026, 9, 19 ] ] },
      language: 'en-US',
      custom: {
        'collection-title-short': 'TRIM',
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
