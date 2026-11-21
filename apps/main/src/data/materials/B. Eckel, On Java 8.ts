import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'On Java 8',
      author: [ { given: 'Bruce', family: 'Eckel' } ],
      edition: 2,
      medium: 'eBook',
      publisher: 'MindView LLC',
      issued: { 'date-parts': [ [ 2021, 12, 14 ] ] },
      'original-date': { 'date-parts': [ [ 2017, 6, 16 ] ] },
      ISBN: '9780981872520',
      'number-of-pages': 1820,
      language: 'en-US',
      URL: 'https://leanpub.com/onjava8',
      accessed: { 'date-parts': [ [ 2026, 11, 21 ] ] },
      custom: {
        URL: [
          { link: 'https://books.google.com/books/about/On_Java_8.html?id=p4ytDgAAQBAJ', display_text: 'Google Books' }, // Publisher, ISBN and original publication date.
          { link: 'https://books.google.com/books?id=p4ytDgAAQBAJ&pg=PP4&hl=en', display_text: 'Contents' }, // Paginated table of contents.
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
