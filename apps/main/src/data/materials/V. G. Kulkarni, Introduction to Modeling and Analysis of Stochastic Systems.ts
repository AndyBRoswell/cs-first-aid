import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Modeling and Analysis of Stochastic Systems',
      author: [ { given: 'V. G.', family: 'Kulkarni' } ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Springer',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2010, 11, 3 ] ] },
      'collection-title': 'Springer Texts in Statistics',
      ISBN: '978-1-4419-1772-0',
      DOI: '10.1007/978-1-4419-1772-0',
      ISSN: '2197-4136',
      'number-of-pages': 'XIII, 313',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-1-4419-1772-0',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
      custom: {
        'collection-title-short': 'STS',
        'copyright': 'Springer Science+Business Media, LLC 2011',
        'eBook packages': [ 'Mathematics and Statistics', 'Mathematics and Statistics (R0)' ],
        topic: [ 'Statistics, general', 'Probability Theory and Stochastic Processes', 'Operations Research/Decision Theory' ],
        keyword: [ 'Brownian Motion', 'Markov Chains', 'Poisson Processes', 'Renewal Processes', 'Stochastic Models' ],
        URL: [ { link: 'https://extras.springer.com/', display_text: 'Supplementary Material' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-1-4419-1771-3',
            ISSN: '1431-875X',
            issued: { 'date-parts': [ [ 2010, 11, 10 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISSN: '1431-875X',
            ISBN: '978-1-4614-2735-3',
            issued: { 'date-parts': [ [ 2012, 12, 27 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
