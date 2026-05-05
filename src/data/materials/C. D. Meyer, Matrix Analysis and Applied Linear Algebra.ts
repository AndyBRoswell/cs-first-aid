import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Meyer, Matrix Analysis and Applied Linear Algebra',
      'C. D. Meyer, Matrix Analysis and Applied Linear Algebra',
      'Meyer, Matrix Analysis and Applied Linear Algebra, 2e',
      'C. D. Meyer, Matrix Analysis and Applied Linear Algebra, 2e',
      'Meyer, Matrix Analysis and Applied Linear Algebra, 2023',
      'C. D. Meyer, Matrix Analysis and Applied Linear Algebra, 2023',
      { unordered_author: 'Meyer', title: 'Matrix Analysis and Applied Linear Algebra' },
      { unordered_author: 'C. D. Meyer', title: 'Matrix Analysis and Applied Linear Algebra' },
      { unordered_author: 'Meyer', title: 'Matrix Analysis and Applied Linear Algebra', date: 2023 },
      { unordered_author: 'C. D. Meyer', title: 'Matrix Analysis and Applied Linear Algebra', date: 2023 },
      { unordered_author: 'Meyer', title: 'Matrix Analysis and Applied Linear Algebra', edition: 2 },
      { unordered_author: 'C. D. Meyer', title: 'Matrix Analysis and Applied Linear Algebra', edition: 2 },
    ],
    material: {
      type: 'book',
      id: 'C. D. Meyer, Matrix Analysis and Applied Linear Algebra, 2e',
      author: [ { given: 'Carl D.', family: 'Meyer' } ],
      title: 'Matrix Analysis and Applied Linear Algebra',
      edition: 2,
      issued: { 'date-parts': [ [ 2023 ] ] },
      publisher: 'Society for Industrial and Applied Mathematics',
      'collection-title': 'Other Titles in Applied Mathematics',
      'collection-number': 'OT188',
      "number-of-pages": 'xiv + 991',
      ISBN: '978-1-61197-744-8' as CSL_Data.ISBN,
      DOI: '10.1137/1.9781611977448',
      language: 'en-US',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977448',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        'Print': {
          type: 'book',
          id: '[Print] C. D. Meyer, Matrix Analysis and Applied Linear Algebra',
          ISBN: '978-1-61197-743-1' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
  {
    id: [
      'Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide',
      'C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide',
      'Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide, 2e',
      'C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide, 2e',
      'Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide, 2023',
      'C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide, 2023',
      { unordered_author: 'Meyer', title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide' },
      { unordered_author: 'C. D. Meyer', title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide' },
      { unordered_author: 'Meyer', title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide', date: 2023 },
      { unordered_author: 'C. D. Meyer', title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide', date: 2023 },
      { unordered_author: 'Meyer', title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide', edition: 2 },
      { unordered_author: 'C. D. Meyer', title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide', edition: 2 },
    ],
    material: {
      type: 'book',
      id: 'C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide, 2e',
      author: [ { given: 'Carl D.', family: 'Meyer' } ],
      title: 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide',
      edition: 2,
      issued: { 'date-parts': [ [ 2023 ] ] },
      publisher: 'Society for Industrial and Applied Mathematics',
      'collection-title': 'Other Titles in Applied Mathematics',
      'collection-number': 'OT189',
      "number-of-pages": 'vi + 250',
      ISBN: '978-1-61197-746-2' as CSL_Data.ISBN,
      DOI: '10.1137/1.9781611977462',
      language: 'en-US',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977462',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        'Print': {
          type: 'book',
          id: '[Print] C. D. Meyer, Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide, 2e',
          ISBN: ':978-1-61197-745-5' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)