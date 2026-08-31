import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
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
      ISBN: '978-1-61197-744-8',
      DOI: '10.1137/1.9781611977448',
      language: 'en-US',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977448',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '978-1-61197-743-1',
          },
        ],
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
      ISBN: '978-1-61197-746-2',
      DOI: '10.1137/1.9781611977462',
      language: 'en-US',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977462',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '978-1-61197-745-5',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
