import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '线性代数',
      author: [ { family: '李', given: '思' } ],
      genre: 'Lecture notes',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2025, 12 ] ] },
      version: '2025-12',
      'number-of-pages': 312,
      language: 'zh-CN',
      URL: 'https://sili-math.github.io/teachingpage.htm',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        subtitle: '原理与应用',
        edition: '第三次更新',
        institution: [ '清华大学' ],
        free_material: [
          {
            link: 'https://sili-math.github.io/notes/LinearAlgebra.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
