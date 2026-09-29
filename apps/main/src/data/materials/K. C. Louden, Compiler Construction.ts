import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Compiler Construction',
      author: [ { given: 'Kenneth C.', family: 'Louden' } ],
      publisher: 'PWS Publishing Company',
      'publisher-place': 'Boston',
      issued: { 'date-parts': [ [ 1997 ] ] },
      ISBN: '9780534939724',
      'number-of-pages': 'x + 582',
      language: 'en',
      URL: 'https://www.cs.sjsu.edu/~louden/cmptext/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        subtitle: 'Principles and Practice',
        URL: [ { link: 'https://weblibrary.mila.edu.my/bib/1497', display_text: 'MILA University Central Library' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
