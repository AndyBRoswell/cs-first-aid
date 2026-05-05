import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Lax, Linear Algebra and Its Applications',
      'P. D. Lax, Linear Algebra and Its Applications',
      'Lax, Linear Algebra and Its Applications, 2e',
      'P. D. Lax, Linear Algebra and Its Applications, 2e',
      'Lax, Linear Algebra and Its Applications, 2007',
      'P. D. Lax, Linear Algebra and Its Applications, 2007',
      { unordered_author: 'Lax', title: 'Linear Algebra and Its Applications' },
      { unordered_author: 'Lax', title: 'Linear Algebra and Its Applications', date: 2007 },
      { unordered_author: 'Lax', title: 'Linear Algebra and Its Applications', edition: 2 },
    ],
    material: {
      type: 'book',
      id: 'Lax, Linear Algebra and Its Applications, 2e',
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
        'Print': {
          type: 'book',
          id: '[Print] Lax, Linear Algebra and Its Applications',
          ISBN: '978-0-471-75156-4',
          issued: { 'date-parts': [ [ 2007, 9 ] ] },
        } satisfies CSL_Data.Item,
      },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)