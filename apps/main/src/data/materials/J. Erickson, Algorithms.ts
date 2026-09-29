import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Algorithms',
      author: [ { given: 'Jeff', family: 'Erickson' } ],
      edition: 1,
      medium: 'PDF',
      publisher: 'Jeff Erickson',
      issued: { 'date-parts': [ [ 2019, 6 ] ] },
      'number-of-pages': 472,
      language: 'en-US',
      URL: 'https://jeffe.cs.illinois.edu/teaching/algorithms/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        free_material: [
          { link: 'https://jeffe.web.engr.illinois.edu/teaching/algorithms/book/Algorithms-JeffE.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
        ],
        variant: [
          { type: 'book', medium: 'Paperback', issued: { 'date-parts': [ [ 2019, 6, 13 ] ] }, ISBN: '9781792644832' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
