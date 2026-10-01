import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'Understanding Analysis',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Stephen', family: 'Abbott' } ],
      title: 'Understanding Analysis',
      edition: 2,
      publisher: 'Springer',
      "publisher-place": 'New York, NY',
      issued: { "date-parts": [ [ 2015, ], ], },
      "number-of-pages": 312,
      ISBN: '978-1-4939-2712-8',
      "collection-title": 'Undergraduate Texts in Mathematics',
      "collection-editor": [ { given: 'Sheldon Jay', family: 'Axler' }, { given: 'Kenneth Alan', family: 'Ribet' }, ],
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-4939-2712-8',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      custom: {
        keyword: [
          'Abbott analysis',
          'Baire Category Theorem',
          'Calculus',
          'Henstock integral',
          'Riemann integral',
          'Taylor series',
          'Weierstrass approximation theorem',
          'derivatives',
          'fundamental theorem of Calculus',
          'gamma function',
          'general topology',
          'generalized Riemann integral',
          'intermediate value theorem',
          'mean value theorem',
          'power series',
          'real analysis',
          'real numbers',
        ],
        topic: [ 'Analysis' ],
        'eBook packages': [ 'Mathematics and Statistics', 'Mathematics and Statistics (R0)' ],
        "collection-title-short": 'UTM',
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
