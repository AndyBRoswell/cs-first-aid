import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const docs = [
  {
    id: [],
    material: {
      type: 'report',
      title: 'The Mathematical Description of Colour',
      author: [ { literal: 'Ángel José Riesgo' } ],
      issued: { 'date-parts': [ [ 2017, 11, 21 ] ] },
      language: 'en-GB',
      URL: 'http://www.akasimikrasna.sk/uploads/1/4/1/0/14106449/colour_spaces_presentation_compact.pdf',
      accessed: { 'date-parts': [ [ 2026, 8, 23 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

export { docs as entries }