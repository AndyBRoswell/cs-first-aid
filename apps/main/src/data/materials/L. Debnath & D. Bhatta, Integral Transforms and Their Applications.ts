import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Lokenath', family: 'Debnath' }, { given: 'Dambaru', family: 'Bhatta' } ],
      title: 'Integral Transforms and Their Applications',
      edition: 3,
      medium: 'Paperback',
      publisher: 'Chapman & Hall',
      issued: { 'date-parts': [ [ 2024, 10, 13 ] ] },
      'number-of-pages': 818,
      ISBN: '9781032917481',
      language: 'en-US',
      URL: 'https://www.routledge.com/Integral-Transforms-and-Their-Applications/Debnath-Bhatta/p/book/9781032917481',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Hardback',
            issued: { 'date-parts': [ [ 2014, 11, 3 ] ] },
            ISBN: '9781482223576',
            URL: 'https://www.routledge.com/Integral-Transforms-and-Their-Applications/Debnath-Bhatta/p/book/9781482223576',
          },
          {
            type: 'book',
            issued: { 'date-parts': [ [ 2014, 11, 7 ] ] },
            medium: 'eBook',
            ISBN: '9780429162633',
            URL: 'https://www.routledge.com/Integral-Transforms-and-Their-Applications/Debnath-Bhatta/p/book/9780429162633',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
