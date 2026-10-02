import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

// Cite the continuously updated online resource; keep the print edition as a variant.
export const entries = [
  {
    id: [ 'The Rust Programming Language', 'The Rust Book' ],
    material: {
      type: 'webpage',
      title: 'The Rust Programming Language',
      author: [
        { given: 'Steve', family: 'Klabnik' },
        { given: 'Carol', family: 'Nichols' },
        { given: 'Chris', family: 'Krycho' },
      ],
      contributor: [ { literal: 'The Rust Community' } ],
      issued: { 'date-parts': [ [ 2026, 2 ] ] },
      language: 'en-US',
      URL: 'https://doc.rust-lang.org/book/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            edition: 3,
            medium: 'Paperback',
            publisher: 'No Starch Press',
            issued: { 'date-parts': [ [ 2026, 3 ] ] },
            ISBN: '9781718504448',
            'number-of-pages': 624,
            URL: 'https://nostarch.com/rust-programming-language-3e',
            custom: {
              URL: [ { link: 'https://github.com/rust-lang/book/releases/tag/nostarch-third-printing', display_text: 'GitHub release for the print text and code' } ],
            },
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
