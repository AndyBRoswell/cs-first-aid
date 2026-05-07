import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Logic and Proof',
      'J. Avigad et al., Logic and Proof',
      'J. Avigad, R. Y. Lewis, and F. van Doorn, Logic and Proof',
      'Jeremy Avigad, Robert Y. Lewis, and Floris van Doorn, Logic and Proof',
      { unordered_author: [ 'J. Avigad', 'R. Y. Lewis', 'F. van Doorn' ], title: 'Logic and Proof', },
    ],
    material: {
      type: 'book',
      id: 'Jeremy Avigad, Robert Y. Lewis, and Floris van Doorn, Logic and Proof',
      title: 'Logic and Proof',
      author: [ { given: 'Jeremy', family: 'Avigad' }, { given: 'Robert Y.', family: 'Lewis' }, { given: 'Floris', family: 'van Doorn' } ],
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