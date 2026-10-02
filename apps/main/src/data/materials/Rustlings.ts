import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'Rustlings' ],
    material: {
      type: 'webpage',
      title: 'Rustlings',
      // Source: rust-lang/rustlings/Cargo.toml [workspace.package].authors; Carol is marked as alumni.
      // Use the "Carol Nichols" form from the official Rust Book's byline for citation formatting.
      author: [
        { given: 'Mo', family: 'Bitar' },
        { literal: 'Liv' },
        { given: 'Carol', family: 'Nichols' },
      ],
      language: 'en-US',
      URL: 'https://rustlings.rust-lang.org/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: {
          GitHub: [ 'https://github.com/rust-lang/rustlings' ],
        },
      },
    },
  },
] satisfies types_data.Entry[]
