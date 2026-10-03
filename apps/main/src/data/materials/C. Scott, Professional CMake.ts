import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'Professional CMake' ],
    material: {
      type: 'book',
      title: 'Professional CMake: A Practical Guide',
      author: [ { given: 'Craig', family: 'Scott' } ],
      edition: 22,
      issued: { 'date-parts': [ [ 2026, 1, 21 ] ] },
      publisher: 'Crascit',
      language: 'en-US',
      'number-of-pages': 736,
      ISBN: '9781925904383',
      URL: 'https://crascit.com/professional-cmake/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        free_material: [
          { link: 'https://crascit.com/wp-content/uploads/2026/01/ProfessionalCMake_22nd_Edition_GettingStarted.pdf', display_text: 'Free Getting Started guide (first 5 chapters)' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
