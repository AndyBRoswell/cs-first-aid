import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Handbook of Data Compression',
      author: [ { given: 'David', family: 'Salomon' }, { given: 'Giovanni', family: 'Motta' } ],
      edition: 5,
      medium: 'eBook',
      publisher: 'Springer London',
      'publisher-place': 'London',
      issued: { 'date-parts': [ [ 2010, 1, 18 ] ] },
      ISBN: '978-1-84882-903-9',
      DOI: '10.1007/978-1-84882-903-9',
      'number-of-pages': 'XXII + 1361',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-1-84882-903-9',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      custom: {
        keyword: [
          'Coding and Information Theory',
          'Image and Text Compression',
          'coding',
          'coding theory',
          'data compression',
          'image analysis',
          'information theory',
          'signal and image processing',
          'video compression',
        ],
        topic: [ 'Data Storage Representation', 'Signal, Image and Speech Processing', 'Coding and Information Theory', 'Cryptology', 'Image Processing and Computer Vision' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-1-84882-902-2',
            issued: { 'date-parts': [ [ 2009, 11, 9 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
