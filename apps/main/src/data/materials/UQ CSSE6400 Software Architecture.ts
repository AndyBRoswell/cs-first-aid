import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'CSSE6400: Software Architecture',
      author: [ { literal: 'CSSE6400 Course Staff' } ],
      genre: 'Lecture notes and slides',
      medium: 'PDF',
      publisher: 'The University of Queensland',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: 'Semester 1, 2026',
      language: 'en',
      URL: 'https://csse6400.uqcloud.net/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        lecturer: [ { given: 'Richard', family: 'Thomas' } ],
        URL: [
          { link: 'https://course-profiles.uq.edu.au/course-profiles/CSSE6400-21413-7620', display_text: 'Course profile (UQ)' }, // issued, version, lecturer
          { link: 'https://github.com/CSSE6400/software-architecture', display_text: 'GitHub' },
        ],
        free_material: [
          {
            link: 'https://csse6400.uqcloud.net/schedule/',
            display_text: 'Lecture notes and slides (PDF)',
            'Content-Type': 'text/html',
            license: 'CC-BY-NC-SA-4.0',
            note: 'Some handouts retain revision dates from earlier offerings.',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
