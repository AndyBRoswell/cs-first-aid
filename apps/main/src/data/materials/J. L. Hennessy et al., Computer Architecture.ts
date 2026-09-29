import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Architecture',
      author: [ { given: 'John L.', family: 'Hennessy' }, { given: 'David A.', family: 'Patterson' }, { given: 'Christos', family: 'Kozyrakis' } ],
      edition: 7,
      medium: 'Paperback',
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2025, 10, 24 ] ] },
      ISBN: '9780443154065',
      'number-of-pages': 936,
      language: 'en',
      URL: 'https://shop.elsevier.com/books/computer-architecture/hennessy/978-0-443-15406-5',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        subtitle: 'A Quantitative Approach',
        URL: [ { link: 'https://www.educate.elsevier.com/book/details/9780443154065', display_text: 'Elsevier Educate' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
