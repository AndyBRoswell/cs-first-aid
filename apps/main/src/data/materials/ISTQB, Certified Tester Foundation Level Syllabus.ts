import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Certified Tester Foundation Level Syllabus',
      author: [ { literal: 'International Software Testing Qualifications Board' } ],
      version: '4.0.1',
      genre: 'Certification syllabus',
      medium: 'PDF',
      publisher: 'International Software Testing Qualifications Board',
      issued: { 'date-parts': [ [ 2024, 9, 15 ] ] },
      'number-of-pages': 78,
      language: 'en',
      URL: 'https://istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://istqb.org/?download_id=3345&sdm_process_download=1',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
            note: 'Version 4.0.1 (2024-09-15); 78 pages',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
