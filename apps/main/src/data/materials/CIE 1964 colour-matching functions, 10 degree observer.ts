import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'dataset',
      title: 'CIE 1964 colour-matching functions, 10 degree observer',
      author: [ { literal: 'International Commission on Illumination' } ],
      publisher: 'International Commission on Illumination',
      'publisher-place': 'Vienna',
      DOI: '10.25039/CIE.DS.sqksu2n5',
      language: 'en-GB',
      URL: 'https://cie.co.at/datatable/cie-1964-colour-matching-functions-10-degree-observer',
      accessed: { 'date-parts': [ [ 2026, 8, 23 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]