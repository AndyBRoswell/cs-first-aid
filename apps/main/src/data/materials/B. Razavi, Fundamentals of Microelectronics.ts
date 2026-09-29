import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Fundamentals of Microelectronics',
      author: [ { given: 'Behzad', family: 'Razavi' } ],
      edition: 3,
      medium: 'Paperback',
      publisher: 'John Wiley & Sons',
      issued: { 'date-parts': [ [ 2021, 6 ] ] },
      ISBN: '9781119695141',
      'number-of-pages': 960,
      language: 'en',
      URL: 'https://www.wiley.com/en-gb/Fundamentals+of+Microelectronics%2C+3rd+Edition-p-9781119695141',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
