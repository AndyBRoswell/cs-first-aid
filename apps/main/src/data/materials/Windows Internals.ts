import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Windows Internals, Part 1: System Architecture, Processes, Threads, Memory Management, and More',
      author: [ { given: 'Pavel', family: 'Yosifovich' }, { given: 'Mark E.', family: 'Russinovich' }, { given: 'Alex', family: 'Ionescu' }, { given: 'David A.', family: 'Solomon' } ],
      publisher: 'Microsoft Press',
      issued: { 'date-parts': [ [ 2017, 5, 5 ] ] },
      edition: 7,
      volume: 1,
      'number-of-volumes': 2,
      'number-of-pages': 800,
      language: 'en-US',
      medium: 'eBook',
      ISBN: '9780133986488',
      URL: 'https://www.microsoftpressstore.com/store/windows-internals-part-1-system-architecture-processes-9780133986488',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '9780735684188',
            URL: 'https://www.microsoftpressstore.com/store/windows-internals-part-1-system-architecture-processes-9780735684188',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'Windows Internals, Part 2',
      author: [ { given: 'Andrea', family: 'Allievi' }, { given: 'Mark E.', family: 'Russinovich' }, { given: 'Alex', family: 'Ionescu' }, { given: 'David A.', family: 'Solomon' } ],
      publisher: 'Microsoft Press',
      issued: { 'date-parts': [ [ 2021, 8, 31 ] ] },
      edition: 7,
      volume: 2,
      'number-of-volumes': 2,
      'number-of-pages': 912,
      language: 'en-US',
      medium: 'eBook',
      ISBN: '9780135462331',
      URL: 'https://www.microsoftpressstore.com/store/windows-internals-part-2-9780135462331',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '9780135462409',
            URL: 'https://www.microsoftpressstore.com/store/windows-internals-part-2-9780135462409',
            issued: { 'date-parts': [ [ 2021, 10, 1 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
