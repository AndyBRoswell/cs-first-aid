import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'The Definitive C Book Guide and List' ],
    material: {
      type: 'webpage',
      title: 'The Definitive C Book Guide and List',
      author: [ { literal: 'Stack Overflow Community' } ],
      issued: { 'date-parts': [ [ 2009, 2, 18 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 21 ] ] },
      URL: 'https://stackoverflow.com/questions/562303/the-definitive-c-book-guide-and-list',
      language: 'en-US',
    },
  },
] satisfies types_data.Entry[]
