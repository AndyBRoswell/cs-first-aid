import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Start Doing Graph Theory',
      author: [ { given: 'Mikhail', family: 'Lavrov' } ],
      medium: 'HTML and PDF',
      issued: { 'date-parts': [ [ 2026, 10, 29 ] ] },
      'number-of-pages': 478,
      note: 'Date identifies the PDF revision.',
      language: 'en',
      URL: 'https://vertex.degree/',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        URL: [
          { link: 'https://vertex.degree/history', display_text: 'Version history' },
        ],
        free_material: [
          { link: 'https://vertex.degree/contents', display_text: 'Read online', 'Content-Type': 'text/html', license: 'CC-BY-SA-4.0' },
          { link: 'https://vertex.degree/pdf/book.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-SA-4.0' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
