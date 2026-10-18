import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Chapter 1: Software & Software Engineering',
      author: [ { given: 'Roger S.', family: 'Pressman' } ],
      'collection-title': "Software Engineering: A Practitioner's Approach",
      edition: 7,
      'chapter-number': 1,
      genre: 'Lecture slides',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2009 ] ] },
      'number-of-pages': 10,
      language: 'en',
      note: 'Companion slides for the 7th edition. Copy hosted on the Rochester Institute of Technology (RIT) SE361 course website: 19 slides arranged two per PDF page, with one slide on the last page.',
      URL: 'https://www.se.rit.edu/~se361/Slides/se361_Chapter_01.pdf',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.se.rit.edu/~se361/Slides/se361_Chapter_01.pdf',
            display_text: 'PDF (RIT course copy)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
