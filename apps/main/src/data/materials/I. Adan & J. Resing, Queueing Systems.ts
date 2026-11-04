import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Queueing Systems',
      author: [ { given: 'Ivo', family: 'Adan' }, { given: 'Jacques', family: 'Resing' } ],
      medium: 'Lecture notes (PDF)',
      issued: { 'date-parts': [ [ 2015, 3, 26 ] ] },
      language: 'en',
      URL: 'https://iadan.win.tue.nl/queueing.pdf',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        institution: 'Technische Universiteit Eindhoven',
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
