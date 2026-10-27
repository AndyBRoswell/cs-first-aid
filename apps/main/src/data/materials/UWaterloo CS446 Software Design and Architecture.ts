import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'CS446: Software Design and Architecture',
      author: [ { given: 'Pengyu', family: 'Nie' } ],
      genre: 'Lecture notes and slides',
      medium: 'HTML and PDF',
      publisher: 'University of Waterloo',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: 'Winter 2026',
      language: 'en',
      URL: 'https://pengyunie.github.io/cs446-1261/docs/lectures/slides/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        URL: [
          { link: 'https://pengyunie.com/', display_text: 'Instructor’s teaching page' }, // author, issued, version
        ],
        free_material: [
          { link: 'https://pengyunie.github.io/cs446-1261/docs/lectures/slides/', display_text: 'Lecture slides (PDF)', 'Content-Type': 'text/html' },
          { link: 'https://pengyunie.github.io/cs446-1261/docs/lectures/architectural-styles/', display_text: 'Architectural styles (HTML)', 'Content-Type': 'text/html' },
          { link: 'https://pengyunie.github.io/cs446-1261/docs/lectures/design-patterns/', display_text: 'Design patterns (HTML)', 'Content-Type': 'text/html' },
          { link: 'https://pengyunie.github.io/cs446-1261/docs/lectures/evolution/', display_text: 'Evolution of software design and architecture (HTML)', 'Content-Type': 'text/html' },
          { link: 'https://pengyunie.github.io/cs446-1261/docs/lectures/workshops/', display_text: 'Project workshops (HTML)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
