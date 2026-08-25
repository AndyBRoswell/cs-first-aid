import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Python Crash Course',
      author: [ { given: 'Eric', family: 'Matthes', } ],
      language: 'en-US',
      edition: 3,
      "number-of-pages": 552,
      publisher: 'No Starch Press',
      issued: { 'date-parts': [ [ 2022, 12 ], ], },
      accessed: { 'date-parts': [ [ 2026, 5, 13, ], ], },
      URL: 'https://nostarch.com/python-crash-course-3rd-edition',
      ISBN: '9781718502710' as CSL.ISBN,
      custom: {
        subtitle: 'A Hands-On, Project-Based Introduction to Programming',
        Print: {
          type: 'book',
          ISBN: '9781718502703' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]