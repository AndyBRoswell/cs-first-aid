import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'George', family: 'Cain' } ],
      title: 'Complex Analysis',
      medium: 'Chapter PDFs',
      language: 'en-US',
      issued: { 'date-parts': [ [ 2009, 5, 1 ] ] },
      URL: 'https://cain.math.gatech.edu/winter99/complex.html',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://cain.math.gatech.edu/winter99/complex.html',
            display_text: 'Chapter PDFs',
            'Content-Type': 'text/html'
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
