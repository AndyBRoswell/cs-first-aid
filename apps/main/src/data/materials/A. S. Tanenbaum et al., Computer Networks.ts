import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Networks',
      author: [ { given: 'Andrew S.', family: 'Tanenbaum' }, { given: 'Nick', family: 'Feamster' }, { given: 'David J.', family: 'Wetherall' } ],
      edition: 6,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2021, 3, 3 ] ] },
      ISBN: '9781292374062',
      'number-of-pages': 944,
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/computer-networks-global-edition/P200000005535/9781292374062',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: { edition: 'Global Edition' } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
