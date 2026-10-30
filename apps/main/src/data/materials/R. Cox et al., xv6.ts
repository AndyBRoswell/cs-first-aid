import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'xv6: a simple, Unix-like teaching operating system',
      author: [ { given: 'Russ', family: 'Cox' }, { given: 'Frans', family: 'Kaashoek' }, { given: 'Robert', family: 'Morris' } ],
      medium: 'Online',
      language: 'en',
      URL: 'https://mit-pdos.github.io/xv6-riscv-book/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://github.com/mit-pdos/xv6-riscv-book', display_text: 'Book source (GitHub)' },
        ],
        free_material: [
          { link: 'https://pdos.csail.mit.edu/6.1810/2025/xv6/book-riscv-rev5.pdf', display_text: 'PDF (September 2, 2025)', 'Content-Type': 'application/pdf' },
          { link: 'https://github.com/mit-pdos/xv6-riscv', display_text: 'xv6 source code (RISC-V)', 'Content-Type': 'text/html' },
          { link: 'https://pdos.csail.mit.edu/6.1810/2025/schedule.html', display_text: 'MIT 6.1810 schedule and labs (Fall 2025)', 'Content-Type': 'text/html' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'PDF',
            issued: { 'date-parts': [ [ 2025, 9, 2 ] ] }, // Date on title page.
            'number-of-pages': 116,
            URL: 'https://pdos.csail.mit.edu/6.1810/2025/xv6/book-riscv-rev5.pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
