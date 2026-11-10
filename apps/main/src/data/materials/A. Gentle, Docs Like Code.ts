import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'Docs Like Code' ],
    material: {
      type: 'book',
      title: 'Docs Like Code',
      author: [ { given: 'Anne', family: 'Gentle' } ],
      edition: 3,
      publisher: 'Lulu.com',
      issued: { 'date-parts': [ [ 2022, 11, 1 ] ] },
      ISBN: '9781387496341',
      medium: 'EPUB',
      language: 'en',
      URL: 'https://www.docslikecode.com/',
      accessed: { 'date-parts': [ [ 2026, 11, 10 ] ] },
      custom: {
        subtitle: 'Collaborate and Automate to Improve Technical Documentation',
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            ISBN: '9781387531493',
            'number-of-pages': 132,
            dimensions: '189 × 246 mm',
            URL: 'https://www.amazon.com/dp/1387531492',
            custom: {
              binding: 'Perfect bound',
              'Interior Color': 'Black and white',
            } satisfies CSL.Custom,
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
