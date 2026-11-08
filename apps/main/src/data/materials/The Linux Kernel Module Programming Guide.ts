import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Linux Kernel Module Programming Guide',
      author: [
        { given: 'Peter Jay', family: 'Salzman' },
        { given: 'Michael', family: 'Burian' },
        { given: 'Ori', family: 'Pomerantz' },
        { given: 'Bob', family: 'Mottram' },
        { given: 'Jim', family: 'Huang' },
      ],
      issued: { 'date-parts': [ [ 2026, 9, 7 ] ] }, // Date displayed by the maintained online edition.
      language: 'en',
      medium: 'Online',
      URL: 'https://sysprog21.github.io/lkmpg/',
      accessed: { 'date-parts': [ [ 2026, 11, 8 ] ] },
      note: 'Maintained edition for modern kernels; Linux 5.10 is the minimum supported baseline.',
      custom: {
        URL: [
          { link: 'https://github.com/sysprog21/lkmpg', display_text: 'Book source and examples (GitHub)' },
        ],
        free_material: [
          { link: 'https://sysprog21.github.io/lkmpg/', display_text: 'Full text (HTML)', 'Content-Type': 'text/html', license: 'OSL-3.0' },
          { link: 'https://github.com/sysprog21/lkmpg/releases/download/latest/lkmpg.pdf', display_text: 'Latest PDF', 'Content-Type': 'application/pdf', license: 'OSL-3.0' },
          { link: 'https://github.com/sysprog21/lkmpg/tree/master/examples', display_text: 'Example source code', 'Content-Type': 'text/html', license: 'GPL-2.0-only' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
