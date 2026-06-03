import * as docs_base from '@/content/docs/base.ts'
import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/content/docs/Courses, Textbooks and References/import course materials.ts'

export const info = {
  canonical_name: 'Java 程序设计',
  name: [ 'Java 程序设计', 'Java' ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get({ unordered_author: 'Oracle', title: 'Learn Java', }),
    ],
    other: [
      catalog.get({ unordered_author: [ 'K. Sierra', 'B. Bates', 'T. Gee' ], title: 'Head First Java', }),
    ],
  }
} satisfies data_type.Course

export const bib = docs_base.print_bibliography(info.material!)
