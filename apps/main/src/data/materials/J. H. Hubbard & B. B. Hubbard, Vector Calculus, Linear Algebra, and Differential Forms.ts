import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'John H.', family: 'Hubbard' }, { given: 'Barbara Burke', family: 'Hubbard' } ],
      title: 'Vector Calculus, Linear Algebra, and Differential Forms',
      edition: 5,
      publisher: 'Matrix Editions',
      issued: { 'date-parts': [ [ 2015 ] ] },
      'number-of-pages': 818,
      ISBN: '978-0-9715766-8-1',
      language: 'en-US',
      URL: 'https://matrixeditions.com/5thUnifiedApproach.html',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        subtitle: 'A Unified Approach',
        URL: [ { link: 'https://matrixeditions.com/errata.html', display_text: 'Errata and printing information' } ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
