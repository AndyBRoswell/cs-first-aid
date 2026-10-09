import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Probability',
      author: [ { given: 'David F.', family: 'Anderson' }, { given: 'Timo', family: 'Seppäläinen' }, { given: 'Benedek', family: 'Valkó' } ],
      medium: 'Hardback',
      publisher: 'Cambridge University Press',
      issued: { 'date-parts': [ [ 2017, 11, 2 ] ] },
      ISBN: '9781108415859',
      'number-of-pages': 442,
      'collection-title': 'Cambridge Mathematical Textbooks',
      language: 'en',
      URL: 'https://www.cambridge.org/highereducation/books/introduction-to-probability/5AB95A42185AB1EF4EDDE73C3A56494E',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'eBook (Cambridge)',
            publisher: 'Cambridge University Press',
            issued: { 'date-parts': [ [ 2018, 6, 21 ] ] },
            ISBN: '9781108235310',
            DOI: '10.1017/9781108235310',
            URL: 'https://www.cambridge.org/highereducation/books/introduction-to-probability/5AB95A42185AB1EF4EDDE73C3A56494E',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
          {
            type: 'book',
            medium: 'eBook (PDF+DRM)',
            publisher: 'Cambridge University Press',
            issued: { 'date-parts': [ [ 2017, 11, 2 ] ] },
            ISBN: '9781108246705',
            URL: 'https://www.kriso.ee/introduction-probability-db-97811082467052e.html',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
