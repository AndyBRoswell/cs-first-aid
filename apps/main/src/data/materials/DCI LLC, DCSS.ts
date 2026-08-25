import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'DCSS', 'DCI Spec' ],
    material: {
      type: 'standard',
      title: 'Digital Cinema System Specification',
      author: [ { literal: 'Digital Cinema Initiatives, LLC' } ],
      version: '1.5.0',
      publisher: 'Digital Cinema Initiatives, LLC',
      language: 'en-US',
      URL: 'https://www.dcimovies.com/specification/',
      issued: { 'date-parts': [ [ 2026, 1, 29 ] ] },
      accessed: { 'date-parts': [ [ 2026, 8, 24 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]