import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
      'Logic and Proof',
    ],
    material: {
      type: 'book',
      title: 'Logic and Proof',
      author: [ { given: 'Jeremy', family: 'Avigad' }, { given: 'Robert Y.', family: 'Lewis' }, { given: 'Floris', "dropping-particle": 'van', family: 'Doorn' } ],
      version: '3.18.4',
      issued: { 'date-parts': [ [ 2021, 12, 4 ] ] },
      language: 'en-US',
      URL: 'https://avigad.github.io/logic_and_proof/',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://avigad.github.io/logic_and_proof/logic_and_proof.pdf',
            display_text: 'PDF',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

export { items as entries }