import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'Rust by Example' ],
    material: {
      type: 'webpage',
      title: 'Rust by Example',
      author: [ { literal: 'The Rust Community' } ],
      language: 'en-US',
      URL: 'https://doc.rust-lang.org/rust-by-example/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
    },
  },
] satisfies types_data.Entry[]
