import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'article',
      author: [ { family: 'Lu', given: 'Jun' } ],
      title: 'Matrix Decomposition and Applications',
      DOI: '10.48550/arXiv.2201.00145',
      URL: 'https://arxiv.org/abs/2201.00145',
      issued: { 'date-parts': [ [ 2025, 8, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      language: 'en-US',
      custom: {
        tag: [ 'preprint', 'math.NA' ],
        free_material: [
          {
            link: 'https://arxiv.org/pdf/2201.00145',
            display_text: 'PDF (arXiv)',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
