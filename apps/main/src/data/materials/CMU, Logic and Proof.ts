import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import * as Data_Type from '../../../../../packages/bibkit/src/types/data.ts'
import * as CSL_Data from '../../../../../packages/bibkit/src/CSL_data.ts'

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
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)