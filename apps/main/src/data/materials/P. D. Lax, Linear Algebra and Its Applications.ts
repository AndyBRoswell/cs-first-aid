import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'Peter D.', family: 'Lax' } ],
      title: 'Linear Algebra and Its Applications',
      edition: 2,
      "number-of-pages": 392,
      issued: { 'date-parts': [ [ 2013, 5 ] ] },
      "original-date": { "date-parts": [ [ 2007, 9 ] ] },
      publisher: 'Wiley-Interscience',
      'collection-title': 'Pure and Applied Mathematics: A Wiley Series of Texts, Monographs and Tracts',
      ISBN: '978-1-118-62692-4',
      language: 'en-US',
      URL: 'https://www.wiley.com/en-us/Linear+Algebra+and+Its+Applications%2C+2nd+Edition-p-9781118626924',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '978-0-471-75156-4',
            issued: { 'date-parts': [ [ 2007, 9 ] ] },
          },
        ],
      },
    },
  },
] satisfies types_data.Entry[]
