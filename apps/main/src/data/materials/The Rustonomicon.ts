import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'The Rustonomicon' ],
    material: {
      type: 'webpage',
      title: 'The Rustonomicon',
      author: [ { literal: 'The Rust Project Developers' } ],
      language: 'en-US',
      URL: 'https://doc.rust-lang.org/nomicon/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
    },
  },
] satisfies types_data.Entry[]
