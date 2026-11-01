import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Programming Differential Privacy',
      author: [ { given: 'Joseph P.', family: 'Near' }, { given: 'Chiké', family: 'Abuah' } ],
      medium: 'HTML and PDF',
      issued: { 'date-parts': [ [ 2026, 9, 19 ] ] },
      'original-date': { 'date-parts': [ [ 2021 ] ] },
      'number-of-pages': 122,
      note: 'Date identifies the PDF revision.',
      language: 'en',
      URL: 'https://programming-dp.com/',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        free_material: [
          { link: 'https://programming-dp.com/front/', display_text: 'Read online', 'Content-Type': 'text/html', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://programming-dp.com/book.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' },
          { link: 'https://github.com/uvm-plaid/programming-dp', display_text: 'Source and notebooks (GitHub)' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
