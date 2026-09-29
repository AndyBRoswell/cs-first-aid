import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Organization and Architecture',
      author: [ { given: 'William', family: 'Stallings' } ],
      edition: 11,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2021, 11, 16 ] ] },
      ISBN: '9781292420103',
      'number-of-pages': 896,
      language: 'en',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/computer-organization-and-architecture-global-edition/P200000005473/9781292420103',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        subtitle: 'Designing for Performance',
        edition: 'Global Edition',
        URL: [ { link: 'https://www.pearson.com/se/Nordics-Higher-Education/subject-catalogue/computer-science/Stallings-Computer-Organization-and-Architecture-Global-Edition-11e.html', display_text: 'Pearson Nordics' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
