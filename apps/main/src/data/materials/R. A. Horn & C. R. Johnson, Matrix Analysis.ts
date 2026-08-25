import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'Roger Alan', family: 'Horn' }, { given: 'Charles Royal', family: 'Johnson' } ],
      title: 'Matrix Analysis',
      publisher: 'Cambridge University Press',
      issued: { 'date-parts': [ [ 2013, 4, 5 ] ] },
      edition: 2,
      ISBN: '9781139020411' as CSL.ISBN,
      DOI: '10.1017/CBO9781139020411',
      language: 'en-US',
      accessed: { 'date-parts': [ [ 2026, 5, 6 ] ] },
      custom: {
        Hardback: {
          type: 'book',
          ISBN: '9780521839402' as CSL.ISBN,
        } satisfies types_data.Material,
        Paperback: {
          type: 'book',
          ISBN: '9780521548236' as CSL.ISBN,
        } satisfies types_data.Material,
        URL: [
          {
            link: 'https://www.cambridge.org/highereducation/books/matrix-analysis/FDA3627DC2B9F5C3DF2FD8C3CC136B48',
            display_text: 'Cambridge Aspire',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]