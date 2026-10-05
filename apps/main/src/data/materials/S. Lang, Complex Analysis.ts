import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Serge', family: 'Lang' } ],
      title: 'Complex Analysis',
      edition: 4,
      medium: 'eBook (PDF)',
      publisher: 'Springer New York',
      'publisher-place': 'New York, NY',
      'collection-title': 'Graduate Texts in Mathematics',
      'collection-number': 103,
      issued: { 'date-parts': [ [ 2013, 3, 14 ] ] },
      'number-of-pages': 'XIV, 489',
      DOI: '10.1007/978-1-4757-3083-8',
      ISBN: '978-1-4757-3083-8',
      ISSN: '2197-5612',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-4757-3083-8',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        keyword: [
          "Cauchy's integral formula",
          'Complex analysis',
          "Jensen's formula",
          'Meromorphic function',
          'calculus',
          'differential equation',
          'gamma function',
          'maximum',
        ],
        topic: [ 'Analysis' ],
        'eBook packages': 'Springer Book Archive',
        'collection-title-short': 'GTM',
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            issued: { 'date-parts': [ [ 1998, 12, 7 ] ] },
            ISBN: '978-0-387-98592-3',
            ISSN: '0072-5285',
          },
          {
            type: 'book',
            medium: 'Softcover',
            issued: { 'date-parts': [ [ 2010, 11, 19 ] ] },
            ISBN: '978-1-4419-3135-1',
            ISSN: '0072-5285',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
