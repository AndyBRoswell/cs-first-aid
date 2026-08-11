import * as data_type from '../../../../../packages/bibkit/src/types/data.ts'
import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import '@/data/courses/import course materials.ts'
import * as util from '../../../../../packages/common/util.ts'

export const info = {
  canonical_name: 'Java 程序设计',
  name: [ 'Java 程序设计', 'Java' ],
  tag: [ '基础选修' ],
  material: {
    text: [
      ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Oracle' && util.ieq(item.title!, 'Learn Java'), { max_count: 1 }),
    ],
    reference: [
      ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Head First Java'), { max_count: 1 }),
    ],
  }
} satisfies data_type.Course
