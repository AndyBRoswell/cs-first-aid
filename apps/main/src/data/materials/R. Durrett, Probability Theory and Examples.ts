import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Probability: Theory and Examples',
      author: [ { given: 'Rick', family: 'Durrett' } ],
      edition: 5,
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2019, 1, 11 ] ] },
      language: 'en',
      URL: 'https://sites.math.duke.edu/~rtd/PTE/pte.html',
      accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            edition: 5,
            medium: 'Hardback',
            publisher: 'Cambridge University Press',
            issued: { 'date-parts': [ [ 2019, 4, 18 ] ] },
            ISBN: '9781108473682',
            URL: 'https://www.cambridge.org/core/books/probability/DD9A1907F810BB14CCFF022CDFC5677A',
            accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf',
            display_text: 'Author PDF (5e)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
