import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'

export const info = {
  canonical_name: 'Java 程序设计',
  name: [ 'Java 程序设计', 'Java' ],
  tag: [ '基础选修' ],
  material: {
    text: [
      catalog.get({ unordered_author: 'Oracle', title: 'Learn Java', }),
    ],
    reference: [
      catalog.get({ unordered_author: [ 'K. Sierra', 'B. Bates', 'T. Gee' ], title: 'Head First Java', }),
    ],
  }
} satisfies data_type.Course
