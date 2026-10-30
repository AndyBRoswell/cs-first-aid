import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'CoCo Assignments 2025',
      genre: 'Laboratory manual',
      medium: 'PDF',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'XB_0003 / XM_0139',
      issued: { 'date-parts': [ [ 2025 ] ] },
      version: '2025',
      'number-of-pages': 21,
      language: 'en',
      URL: 'https://download.vusec.net/vms/coco/CoCoAssignments2025.pdf',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://research.vu.nl/en/courses/compiler-construction-6/', display_text: 'Bachelor course description (XB_0003)' },
          { link: 'https://research.vu.nl/en/courses/advanced-compiler-construction-3/', display_text: 'Master course description (XM_0139)' },
          { link: 'https://teemperor.de/', display_text: 'Teaching Compiler Construction with LLVM: former TA\'s public-release links' },
        ],
        free_material: [
          { link: 'https://github.com/vusec/coco', display_text: 'Official framework, tests, local grading scripts and Docker setup', 'Content-Type': 'text/html' },
          { link: 'https://codeload.github.com/vusec/coco/zip/refs/heads/main', display_text: 'Official framework source (ZIP)', 'Content-Type': 'application/zip' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
