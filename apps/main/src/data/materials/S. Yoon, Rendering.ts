import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Rendering',
      author: [ { given: 'Sung-eui', family: 'Yoon' } ],
      edition: '1.2', // Author's website; the PDF describes this as the first edition with minor corrections.
      issued: { 'date-parts': [ [ 2024, 4 ] ] },
      ISBN: '978-89-89453-06-2',
      language: 'en-US',
      URL: 'https://sgvr.kaist.ac.kr/~sungeui/render/',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://sgvr.kaist.ac.kr/~sungeui/render/rendering_book_1.2ed.pdf',
            display_text: 'PDF (1.2 edition, April 2024)',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
