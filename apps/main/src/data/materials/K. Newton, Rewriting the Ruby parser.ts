import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'post-weblog',
      title: 'Rewriting the Ruby parser',
      author: [ { given: 'Kevin', family: 'Newton' } ],
      'container-title': 'Rails at Scale',
      issued: { 'date-parts': [ [ 2023, 6, 12 ] ] },
      language: 'en',
      URL: 'https://railsatscale.com/2023-06-12-rewriting-the-ruby-parser/',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
