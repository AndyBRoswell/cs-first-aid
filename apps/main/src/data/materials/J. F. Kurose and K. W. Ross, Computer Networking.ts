import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Networking',
      author: [ { given: 'James F.', family: 'Kurose' }, { given: 'Keith W.', family: 'Ross' } ],
      edition: 9,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2026, 9, 8 ] ] },
      ISBN: '9781292499239',
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/computer-networking-global-edition/P200000015518/9781292499239',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: { subtitle: 'A Top-Down Approach', edition: 'Global Edition' } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
