import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/content/docs/Courses, Textbooks and References/import course material.ts'
// import '@/data/materials/A. Stellman et al., Head First C♯.ts'
// import '@/data/materials/Microsoft, A tour of the C♯ language.ts'

export const info = {
  canonical_name: 'C# 程序设计',
  name: [ 'C# 程序设计', 'C#', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get({ unordered_author: 'Microsoft', title: 'A tour of the C# language' }),
    ],
    other: [
      catalog.get({ unordered_author: [ 'A. Stellman', 'J. Greene' ], title: 'Head First C#', }),
    ]
  }
} satisfies data_type.Course

export const bib = docs_base.print_bibliography(info.material!)