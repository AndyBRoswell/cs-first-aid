import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'Principles governing photometry',
      'Rapport BIPM-2019/05',
    ],
    material: {
      type: 'report',
      title: 'Principles Governing Photometry',
      author: [ { given: 'Yoshi', family: 'Ohno' }, { given: 'Teresa', family: 'Goodman' }, { given: 'Peter', family: 'Blattner' }, { given: 'Janos', family: 'Schanda' }, { given: 'Hiroshi', family: 'Shitomi' }, { given: 'Armin', family: 'Sperling' }, { given: 'Joanne', family: 'Zwinkels' } ],
      number: 'Rapport BIPM-2019/05',
      edition: 2,
      publisher: 'Bureau International des Poids et Mesures',
      'publisher-place': 'Sèvres, France',
      issued: { 'date-parts': [ [ 2019, 4, 14 ] ] },
      language: 'en-GB',
      URL: 'https://www.bipm.org/en/publications/mises-en-pratique/',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.bipm.org/documents/20126/41749107/Principles%20governing%20photometry/8365350c-bf72-3cf2-bf03-324bf5c01b62',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
