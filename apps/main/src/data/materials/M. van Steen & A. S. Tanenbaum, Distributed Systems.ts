import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Distributed Systems',
      author: [ { given: 'Maarten', family: 'van Steen' }, { given: 'Andrew S.', family: 'Tanenbaum' } ],
      edition: 4,
      version: '4.03x',
      medium: 'PDF',
      publisher: 'Maarten van Steen',
      issued: { 'date-parts': [ [ 2025, 2 ] ] },
      ISBN: '9789081540643',
      language: 'en',
      URL: 'https://www.distributed-systems.net/index.php/books/ds4/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        free_material: [
          { link: 'https://www.distributed-systems.net/index.php/books/ds4/ds4-ebook/', display_text: 'PDF' },
        ],
        variant: [
          { type: 'book', version: '4.03', medium: 'Paperback', issued: { 'date-parts': [ [ 2025, 1 ] ] }, ISBN: '9789081540636', 'number-of-pages': 684 },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
