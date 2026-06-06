import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'

export const info = {
  canonical_name: 'C 程序设计',
  name: [ 'C 程序设计', 'C 语言程序设计', 'C', 'C 语言', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get({ unordered_author: 'J. Gustedt', title: 'Modern C', }),
    ],
    reference: [
      catalog.get('cppreference.com/c'),
    ],
  }
} satisfies data_type.Course
