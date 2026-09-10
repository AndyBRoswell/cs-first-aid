import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'WHAT and HOW Does This Child See? Assessment of Visual Functioning for Development and Learning',
      author: [ { given: 'Lea', family: 'Hyvärinen' }, { given: 'Namita', family: 'Jacob' } ],
      issued: { 'date-parts': [ [ 2011 ] ] },
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      URL: 'https://books.google.com/books/about/What_and_how_Does_this_Child_See.html?id=HDFrtwAACAAJ',
      ISBN: '9789529283804',
      language: 'en-US',
      "number-of-pages": 238,
      custom: {
        free_material: [
          {
            link: 'http://www.lea-test.fi/en/vistests/instruct/contrast/lowsymbo/Snellen.pdf',
            display_text: 'Visual Acuity Conversion Chart',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    },
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]
