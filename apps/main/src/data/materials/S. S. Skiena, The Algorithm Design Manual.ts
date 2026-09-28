import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Algorithm Design Manual',
      author: [ { given: 'Steven S.', family: 'Skiena' } ],
      edition: 3,
      medium: 'eBook',
      publisher: 'Springer Cham',
      'publisher-place': 'Cham',
      issued: { 'date-parts': [ [ 2020, 10, 5 ] ] },
      ISBN: '978-3-030-54256-6',
      DOI: '10.1007/978-3-030-54256-6',
      'collection-title': 'Texts in Computer Science',
      ISSN: '1868-095X',
      'number-of-pages': 'XVII + 793',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-3-030-54256-6',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
      custom: {
        'collection-title-short': 'TCS',
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-3-030-54255-9',
            ISSN: '1868-0941',
            issued: { 'date-parts': [ [ 2020, 10, 6 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-3-030-54258-0',
            ISSN: '1868-0941',
            issued: { 'date-parts': [ [ 2021, 10, 7 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
