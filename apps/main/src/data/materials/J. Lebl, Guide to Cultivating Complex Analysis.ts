import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Jiří', family: 'Lebl' } ],
      title: 'Guide to Cultivating Complex Analysis: Working the Complex Field',
      version: '1.9',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2026, 7, 11 ] ] },
      'number-of-pages': 304,
      language: 'en-US',
      URL: 'https://www.jirka.org/ca/',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.jirka.org/ca/ca.pdf',
            display_text: 'PDF', 'Content-Type': 'application/pdf',
            license: 'CC-BY-SA-4.0 OR CC-BY-NC-SA-4.0'
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '979-8-6850-5792-1',
            URL: 'https://www.jirka.org/ca/'
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
