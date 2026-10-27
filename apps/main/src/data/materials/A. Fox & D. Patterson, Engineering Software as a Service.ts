import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Engineering Software as a Service',
      author: [ { given: 'Armando', family: 'Fox' }, { given: 'David', family: 'Patterson' } ],
      edition: 2,
      version: '2.0b8',
      medium: 'Online',
      issued: { 'date-parts': [ [ 2021 ] ] },
      language: 'en',
      URL: 'https://e.saasbook.info/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        subtitle: 'An Agile Approach Using Cloud Computing',
        URL: [
          { link: 'https://e.saasbook.info/copyright.html', display_text: 'Copyright and credits' },
        ],
        free_material: [
          { link: 'https://drive.google.com/file/d/19dqWms9qUQ2Bi8JfsBhC5Q6zDeJd0s5o/view', display_text: 'PDF (via official website, 2.0b7)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
