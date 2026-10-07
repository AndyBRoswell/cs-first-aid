import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Fundamentals of Probability',
      author: [ { given: 'Saeed', family: 'Ghahramani' } ],
      edition: 5,
      medium: 'Paperback',
      publisher: 'Chapman and Hall/CRC',
      issued: { 'date-parts': [ [ 2024, 9, 6 ] ] },
      ISBN: '9781032803531',
      'number-of-pages': 700,
      language: 'en',
      URL: 'https://www.routledge.com/Fundamentals-of-Probability/Ghahramani/p/book/9781032803531',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
      custom: {
        edition: 'International Edition',
        variant: [
          {
            type: 'book',
            edition: 5,
            medium: 'Hardback',
            ISBN: '9781032366081',
            issued: { 'date-parts': [ [ 2024, 5, 27 ] ] },
            URL: 'https://www.routledge.com/Fundamentals-of-Probability/Ghahramani/p/book/9781032366081',
          },
          {
            type: 'book',
            edition: 5,
            medium: 'eBook',
            ISBN: '9781003332893',
            DOI: '10.1201/9781003332893',
            issued: { 'date-parts': [ [ 2024, 7, 23 ] ] },
            URL: 'https://www.routledge.com/Fundamentals-of-Probability/Ghahramani/p/book/9781003332893',
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
