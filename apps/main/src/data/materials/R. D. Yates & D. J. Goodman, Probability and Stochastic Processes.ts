import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Probability and Stochastic Processes',
      author: [ { given: 'Roy D.', family: 'Yates' }, { given: 'David J.', family: 'Goodman' } ],
      edition: 3,
      publisher: 'Wiley',
      medium: 'Paperback',
      issued: { 'date-parts': [ [ 2014, 1 ] ] },
      ISBN: '9781118324561',
      language: 'en',
      "number-of-pages": 512,
      URL: 'https://www.wiley.com/en-us/probability-and-stochastic-processes-a-friendly-introduction-for-electrical-and-computer-engineers-3rd-edition-p-9781118324561',
      accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
      custom: {
        subtitle: 'A Friendly Introduction for Electrical and Computer Engineers',
        variant: [
          {
            type: 'book',
            edition: 3,
            medium: 'eBook',
            publisher: 'Wiley',
            ISBN: '9781118804384',
            issued: { 'date-parts': [ [ 2013, 12 ] ] },
            URL: 'https://www.vitalsource.com/products/probability-and-stochastic-processes-a-friendly-roy-d-yates-david-j-goodman-v9781118804384',
            accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
