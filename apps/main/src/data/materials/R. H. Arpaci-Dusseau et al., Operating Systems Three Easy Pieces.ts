import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Operating Systems: Three Easy Pieces',
      author: [ { given: 'Remzi H.', family: 'Arpaci-Dusseau' }, { given: 'Andrea C.', family: 'Arpaci-Dusseau' } ],
      contributor: [ { given: 'Peter', family: 'Reiher' } ],
      publisher: 'Arpaci-Dusseau Books',
      issued: { 'date-parts': [ [ 2023, 11 ] ] },
      version: '1.10',
      note: 'Peter Reiher authored the additional security chapters available on the book website.',
      language: 'en-US',
      URL: 'https://pages.cs.wisc.edu/~remzi/OSTEP/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://pages.cs.wisc.edu/~remzi/OSTEP/Chinese/', display_text: '中译版分章 PDF（基于 Version 0.91）' },
          { link: 'https://github.com/remzi-arpacidusseau/ostep-homework', display_text: 'Chapter homework and simulators', 'Content-Type': 'text/html' },
          { link: 'https://github.com/remzi-arpacidusseau/ostep-projects', display_text: 'Systems and xv6 projects', 'Content-Type': 'text/html' },
          { link: 'https://github.com/remzi-arpacidusseau/ostep-code', display_text: 'Example code from the book', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
