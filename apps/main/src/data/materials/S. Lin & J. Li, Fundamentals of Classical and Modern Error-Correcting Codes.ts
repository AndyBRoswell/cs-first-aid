import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Fundamentals of Classical and Modern Error-Correcting Codes',
      author: [ { given: 'Shu', family: 'Lin' }, { given: 'Juane', family: 'Li' } ],
      publisher: 'Cambridge University Press',
      issued: { 'date-parts': [ [ 2021, 12, 9 ] ] },
      ISBN: '9781316512623',
      DOI: '10.1017/9781009067928',
      'number-of-pages': 840,
      language: 'en-US',
      URL: 'https://www.cambridge.org/highereducation/books/fundamentals-of-classical-and-modern-error-correcting-codes/19A81ED5D7E9C6A1EBB9657683B6E39C',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9781009067928',
            issued: { 'date-parts': [ [ 2022, 2, 2 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
