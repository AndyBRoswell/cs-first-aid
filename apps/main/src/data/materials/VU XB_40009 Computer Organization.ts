import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Computer Organization',
      author: [ { literal: 'Vrije Universiteit Amsterdam' } ],
      'container-title': 'Study Guide',
      genre: 'Course description',
      number: 'XB_40009',
      version: '2026–2027',
      language: 'en',
      URL: 'https://studiegids.vu.nl/en/courses/2026-2027/XB_40009',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'CO Lab Manual',
      publisher: 'Vrije Universiteit Amsterdam',
      genre: 'Laboratory manual',
      medium: 'HTML',
      number: 'XB_40009',
      version: '2025–2026',
      language: 'en',
      URL: 'https://computerscienceeducation.gitbook.io/co-lab-manual',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://computerscienceeducation.gitbook.io/co-lab-manual', display_text: 'Lab manual (2025–2026)', 'Content-Type': 'text/html' },
          { link: 'https://github.com/ComputerScienceEducation/co-framework-2026', display_text: 'Lab framework (GitHub, 2025–2026)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
