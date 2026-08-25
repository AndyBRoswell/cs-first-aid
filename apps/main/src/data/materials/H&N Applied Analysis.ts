import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL';

const items = [
  {
    id: [
      'H&N Applied Analysis',
    ],
    material: {
      type: 'book',
      author: [ { given: 'John K.', family: 'Hunter', }, { given: 'Bruno Leo Zulma', family: 'Nachtergaele', }, ],
      title: 'Applied Analysis',
      issued: { "date-parts": [ [ 2005, 7, 21 ] ] },
      language: 'en-US',
      URL: 'https://www.math.ucdavis.edu/%7Ehunter/book/pdfbook.html',
      accessed: { "date-parts": [ [ 2026, 4, 9 ] ] },
      note: 'PostScript ver: https://www.math.ucdavis.edu/%7Ehunter/book/psbook.html',
      custom: {
        free_material: [
          {
            display_text: 'Chapters in PDF',
            link: 'https://www.math.ucdavis.edu/%7Ehunter/book/pdfbook.html',
          },
          {
            display_text: 'Chapters in PostScript',
            link: 'https://www.math.ucdavis.edu/%7Ehunter/book/psbook.html',
          },
        ]
      } satisfies CSL.Custom,
    }
  },
] satisfies types_data.Entry[]

export { items as entries }