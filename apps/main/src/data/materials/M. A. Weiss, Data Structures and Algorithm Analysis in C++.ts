import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Data Structures and Algorithm Analysis in C++',
      author: [ { given: 'Mark Allen', family: 'Weiss' } ],
      edition: 4,
      publisher: 'Pearson Education Limited',
      issued: { 'date-parts': [ [ 2014 ] ] },
      ISBN: '9780273769385',
      'number-of-pages': 653,
      language: 'en-US',
      URL: 'https://search.worldcat.org/title/data-structures-and-algorithm-analysis-in-c/oclc/930793066',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        edition: 'International Edition',
        URL: [ { link: 'https://books.google.com/books/about/Data_Structures_and_Algorithm_Analysis_i.html?id=sdhhywAACAAJ', display_text: 'Google Books' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
