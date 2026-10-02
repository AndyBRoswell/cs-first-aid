import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'The Embedded Rust Book' ],
    material: {
      type: 'webpage',
      title: 'The Embedded Rust Book',
      author: [ { given: 'James', family: 'Munns' } ],
      language: 'en-US',
      URL: 'https://doc.rust-lang.org/embedded-book/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
    },
  },
] satisfies types_data.Entry[]
