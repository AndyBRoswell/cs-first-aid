import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from "../../../../../packages/bibkit/src/CSL_data.ts";

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
      } satisfies CSL_Data.Custom,
    }
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)