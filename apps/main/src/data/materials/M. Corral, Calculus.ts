import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Michael', family: 'Corral' } ],
      title: 'Elementary Calculus',
      medium: 'PDF',
      publisher: 'Michael Corral',
      issued: { 'date-parts': [ [ 2022, 11, 22 ] ] },
      'original-date': { 'date-parts': [ [ 2016, 1, 24 ] ] },
      'number-of-pages': 346,
      language: 'en-US',
      URL: 'https://www.mecmath.net/calculus/index.html',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: [
          { link: 'https://www.mecmath.net/calculus/ElementaryCalculus.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'GFDL-1.3-or-later' },
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Michael', family: 'Corral' } ],
      title: 'Vector Calculus',
      medium: 'PDF',
      publisher: 'Michael Corral',
      issued: { 'date-parts': [ [ 2022, 8, 15 ] ] },
      'original-date': { 'date-parts': [ [ 2008, 1, 4 ] ] },
      'number-of-pages': 220,
      language: 'en-US',
      URL: 'https://www.mecmath.net/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: [
          { link: 'https://www.mecmath.net/VectorCalculus.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'GFDL-1.2-or-later' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
