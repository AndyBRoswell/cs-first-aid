import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Introduction to Probability, Statistics, and Random Processes',
      author: [ { given: 'Hossein', family: 'Pishro-Nik' } ],
      publisher: 'Kappa Research LLC',
      issued: { 'date-parts': [ [ 2014 ] ] },
      language: 'en',
      URL: 'https://probabilitycourse.com/',
      accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://probabilitycourse.com/',
            display_text: 'Online textbook',
            'Content-Type': 'text/html',
            license: 'CC-BY-NC-ND-3.0',
            accessed: { 'date-parts': [ [ 2026, 10, 9 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
