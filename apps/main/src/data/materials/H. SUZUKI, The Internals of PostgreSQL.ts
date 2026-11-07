import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'The Internals of PostgreSQL',
      author: [ { given: 'Hironobu', family: 'SUZUKI' } ],
      'container-title': 'InterDB',
      issued: { 'date-parts': [ [ 2025, 6, 28 ] ] },
      language: 'en',
      URL: 'https://www.interdb.jp/pg/',
      accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
