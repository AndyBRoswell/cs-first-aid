import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Jun Lu, Matrix Decomposition and Applications',
      { unordered_author: 'Jun Lu', title: 'Matrix Decomposition and Applications' },
      { unordered_author: 'Jun Lu', title: 'Matrix Decomposition and Applications', date: 2022 },
    ],
    material: {
      type: 'article',
      id: 'Jun Lu, Matrix Decomposition and Applications',
      author: [ { family: 'Lu', given: 'Jun' } ],
      title: 'Matrix Decomposition and Applications',
      DOI: '10.48550/arXiv.2201.00145',
      URL: 'https://arxiv.org/abs/2201.00145',
      issued: { 'date-parts': [ [ 2025, 8, 1 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      language: 'en-US',
      custom: {
        tag: [ 'preprint', 'math.NA' ],
        URL: [
          { link: 'https://arxiv.org/abs/2201.00145', tag: [ 'arXiv', 'abstract' ] },
          { link: 'https://arxiv.org/pdf/2201.00145', tag: [ 'arXiv', 'PDF' ] },
        ],
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)