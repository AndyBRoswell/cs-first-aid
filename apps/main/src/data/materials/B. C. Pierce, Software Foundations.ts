import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Software Foundations',
      editor: [ { given: 'Benjamin C.', family: 'Pierce' } ],
      'number-of-volumes': 7,
      medium: 'Online',
      note: 'Online textbook series; each volume has its own authors, version, and publication date.',
      language: 'en',
      URL: 'https://softwarefoundations.cis.upenn.edu/',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
