import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'The Cargo Book' ],
    material: {
      type: 'webpage',
      title: 'The Cargo Book',
      author: [ { literal: 'The Rust Project Developers' } ],
      language: 'en-US',
      URL: 'https://doc.rust-lang.org/cargo/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
    },
  },
] satisfies types_data.Entry[]
