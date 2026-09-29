import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to the Theory of Computation',
      author: [ { given: 'Michael', family: 'Sipser' } ],
      edition: 3,
      medium: 'Paperback',
      publisher: 'Cengage Learning',
      issued: { 'date-parts': [ [ 2021, 1, 29 ] ] },
      ISBN: '9780357670583',
      'number-of-pages': 504,
      language: 'en',
      URL: 'https://www.cengage.uk/c/introduction-to-the-theory-of-computation-3e-sipser/9780357670583/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        URL: [ { link: 'https://prod.cengageasia.com/title/default/detail?isbn=9780357670583', display_text: 'Cengage Asia' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
