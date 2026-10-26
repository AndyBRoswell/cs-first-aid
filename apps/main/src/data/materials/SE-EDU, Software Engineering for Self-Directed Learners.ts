import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Software Engineering for Self-Directed Learners',
      author: [ { literal: 'SE-EDU' } ],
      medium: 'Online',
      language: 'en',
      URL: 'https://se-education.org/se-book/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        URL: [
          { link: 'https://se-education.org/se-book/about/acknowledgements.html', display_text: 'About and license' },
        ],
        free_material: [
          { link: 'https://se-education.org/se-book/', display_text: 'HTML', 'Content-Type': 'text/html', license: 'MIT' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
