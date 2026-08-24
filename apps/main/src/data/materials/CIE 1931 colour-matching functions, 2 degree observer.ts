import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const datasets = [
  {
    id: [],
    material: {
      type: 'dataset',
      title: 'CIE 1931 colour-matching functions, 2 degree observer',
      author: [ { literal: 'International Commission on Illumination' } ],
      publisher: 'International Commission on Illumination',
      'publisher-place': 'Vienna',
      language: 'en-GB',
      URL: 'https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer',
      accessed: { 'date-parts': [ [ 2026, 8, 23 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

catalog.add_items(datasets)