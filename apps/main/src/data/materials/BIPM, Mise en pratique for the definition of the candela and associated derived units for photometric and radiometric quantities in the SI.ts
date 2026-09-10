import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'SI-App2-candela' ],
    material: {
      type: 'report',
      title: 'Mise en pratique for the definition of the candela and associated derived units for photometric and radiometric quantities in the SI',
      author: [ { literal: 'Consultative Committee for Photometry and Radiometry' } ],
      publisher: 'Bureau International des Poids et Mesures',
      issued: { 'date-parts': [ [ 2021, 3, 22 ] ] },
      language: 'en-GB',
      URL: 'https://www.bipm.org/en/publications/mises-en-pratique/',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.bipm.org/documents/20126/41489685/SI-App2-candela.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
