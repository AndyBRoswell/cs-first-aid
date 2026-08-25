import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'Rudin PMA',
      'Baby Rudin',
    ],
    material: {
      type: 'book',
      title: 'Principles of Mathematical Analysis',
      "title-short": 'PMA',
      author: [ { given: 'Walter', family: 'Rudin' } ],
      publisher: 'McGraw-Hill Education',
      issued: { 'date-parts': [ [ 1976, ] ] },
      edition: 3,
      ISBN: '9780070542358' as CSL.ISBN,
      language: 'en-US',
      URL: 'https://www.goodreads.com/en/book/show/292079.Principles_of_Mathematical_Analysis',
      note: 'ISBN10: 007054234X/007054235X/0070856133',
    }
  },
] satisfies types_data.Entry[]