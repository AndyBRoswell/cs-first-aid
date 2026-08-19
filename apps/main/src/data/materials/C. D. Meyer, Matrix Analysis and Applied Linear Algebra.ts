import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'Carl D.', family: 'Meyer' } ],
      title: 'Matrix Analysis and Applied Linear Algebra',
      edition: 2,
      issued: { 'date-parts': [ [ 2023 ] ] },
      publisher: 'Society for Industrial and Applied Mathematics',
      'collection-title': 'Other Titles in Applied Mathematics',
      'collection-number': 'OT188',
      "number-of-pages": 'xiv + 991',
      ISBN: '978-1-61197-744-8' as CSL.ISBN,
      DOI: '10.1137/1.9781611977448',
      language: 'en-US',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977448',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        'Print': {
          type: 'book',
          ISBN: '978-1-61197-743-1' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'Carl D.', family: 'Meyer' } ],
      title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide',
      edition: 2,
      issued: { 'date-parts': [ [ 2023 ] ] },
      publisher: 'Society for Industrial and Applied Mathematics',
      'collection-title': 'Other Titles in Applied Mathematics',
      'collection-number': 'OT189',
      "number-of-pages": 'vi + 250',
      ISBN: '978-1-61197-746-2' as CSL.ISBN,
      DOI: '10.1137/1.9781611977462',
      language: 'en-US',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977462',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        'Print': {
          type: 'book',
          ISBN: ':978-1-61197-745-5' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)