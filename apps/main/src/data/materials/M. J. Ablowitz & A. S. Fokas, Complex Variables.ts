import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Mark J.', family: 'Ablowitz' }, { given: 'Athanassios S.', family: 'Fokas' } ],
      title: 'Complex Variables: Introduction and Applications',
      edition: 2,
      medium: 'Paperback',
      publisher: 'Cambridge University Press',
      'publisher-place': 'Cambridge',
      'collection-title': 'Cambridge Texts in Applied Mathematics',
      'collection-number': 35,
      issued: { 'date-parts': [ [ 2003, 4, 28 ] ] },
      'number-of-pages': 660,
      ISBN: '978-0-521-53429-1',
      language: 'en-GB',
      URL: 'https://www.cambridge.org/core/books/complex-variables/08A62E6DB03F5D5435F5DE6260618002',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            issued: { 'date-parts': [ [ 2012, 9, 5 ] ] },
            ISBN: '978-0-511-79124-6',
            DOI: '10.1017/CBO9780511791246',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
