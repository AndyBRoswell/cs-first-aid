import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Security Engineering',
      author: [ { given: 'Ross', family: 'Anderson' } ],
      edition: 3,
      medium: 'eBook (PDF)',
      publisher: 'John Wiley & Sons',
      'publisher-place': 'Indianapolis, IN',
      issued: { 'date-parts': [ [ 2020 ] ] },
      language: 'en',
      URL: 'https://www.cl.cam.ac.uk/archive/rja14/book.html',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        subtitle: 'A Guide to Building Dependable Distributed Systems',
        free_material: [
          { link: 'https://www.cl.cam.ac.uk/archive/rja14/Papers/SEv3.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
