import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [
        { given: 'Matthias', family: 'Beck' },
        { given: 'Gerald', family: 'Marchesi' },
        { given: 'Dennis', family: 'Pixton' },
        { given: 'Lucas', family: 'Sabalka' },
      ],
      title: 'A First Course in Complex Analysis',
      version: '1.6',
      medium: 'Online and PDF',
      issued: { 'date-parts': [ [ 2025, 8 ] ] },
      language: 'en-US',
      URL: 'https://matthbeck.github.io/complex.html',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        free_material: [
          { link: 'https://matthbeck.github.io/complexanalysis/', display_text: 'HTML', 'Content-Type': 'text/html', license: 'CC-BY-4.0' },
          { link: 'https://matthbeck.github.io/papers/complex.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
        ],
        variant: [
          {
            type: 'book',
            version: '1.6',
            medium: 'Paperback',
            publisher: 'Orthogonal Publishing L3C',
            'publisher-place': 'Ann Arbor, MI',
            'number-of-pages': 206,
            ISBN: '978-1-944325-20-6',
            URL: 'https://orthogonalpublishing.com/',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
