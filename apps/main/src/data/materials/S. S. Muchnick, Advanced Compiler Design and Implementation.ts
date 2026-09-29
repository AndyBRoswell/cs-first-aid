import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Advanced Compiler Design and Implementation',
      author: [ { given: 'Steven S.', family: 'Muchnick' } ],
      edition: 1,
      medium: 'Hardcover',
      publisher: 'Morgan Kaufmann',
      'publisher-place': 'San Francisco, CA',
      issued: { 'date-parts': [ [ 1997 ] ] },
      ISBN: '9781558603202',
      'number-of-pages': 'xxix + 856',
      language: 'en',
      URL: 'https://shop.elsevier.com/books/advanced-compiler-design-and-implementation/muchnick/978-0-08-049871-3',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        URL: [ { link: 'https://library.kaist.ac.kr/search/ctlgSearch/posesn/view.do?bibctrlno=155391&ty=B', display_text: 'KAIST Library' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
