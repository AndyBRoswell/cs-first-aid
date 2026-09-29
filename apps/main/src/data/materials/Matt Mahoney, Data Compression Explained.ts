import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Data Compression Explained',
      author: [ { given: 'Matt', family: 'Mahoney' } ],
      issued: { 'date-parts': [ [ 2013, 4, 15 ] ] }, // Last update of the online book.
      language: 'en-US',
      URL: 'https://mattmahoney.net/dc/dce.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://mattmahoney.net/dc/dce.epub',
            display_text: 'EPUB',
            'Content-Type': 'application/epub+zip',
          },
          {
            link: 'https://mattmahoney.net/dc/dce.mobi',
            display_text: 'MOBI',
            'Content-Type': 'application/x-mobipocket-ebook',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
