import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Theory of Computation',
      author: [ { given: 'Dexter C.', family: 'Kozen' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Springer London',
      'publisher-place': 'London',
      issued: { 'date-parts': [ [ 2006, 9, 19 ] ] },
      ISBN: '978-1-84628-477-9',
      DOI: '10.1007/1-84628-477-5',
      'collection-title': 'Texts in Computer Science',
      ISSN: '1868-095X',
      'number-of-pages': 'XIV + 418',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/1-84628-477-5',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      custom: {
        keyword: [
          'Algorithms',
          'Automat',
          'algorithm',
          'automata',
          'complexity',
          'complexity theory',
          'computer',
          'computer science',
          'construction',
          'logic',
          'algorithm analysis and problem complexity',
        ],
        topic: [ 'Theory of Computation', 'Computational Mathematics and Numerical Analysis', 'Computational Science and Engineering', 'Computation by Abstract Devices', 'Algorithm Analysis and Problem Complexity' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        'collection-title-short': 'TCS',
        variant: [
          { type: 'book', medium: 'Hardcover', ISBN: '978-1-84628-297-3', ISSN: '1868-0941', issued: { 'date-parts': [ [ 2006, 5, 8 ] ] } },
          { type: 'book', medium: 'Softcover', ISBN: '978-1-84996-571-2', ISSN: '1868-0941', issued: { 'date-parts': [ [ 2010, 10, 21 ] ] } },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
