import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Electric Circuits',
      author: [ { given: 'James W.', family: 'Nilsson' }, { given: 'Susan A.', family: 'Riedel' } ],
      edition: 12,
      medium: 'Paperback',
      publisher: 'Pearson Education Limited',
      'publisher-place': 'Harlow',
      issued: { 'date-parts': [ [ 2025, 5, 6 ] ] },
      ISBN: '9781292736198',
      'number-of-pages': 800,
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/electric-circuits-global-edition/P200000012127',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: { edition: 'Global Edition' } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
