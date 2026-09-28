import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: 'Java 程序设计',
  name: [ 'Java 程序设计', 'Java' ],
  tag: [ '基础选修' ],
  material: {
    text: {
      en: [
        ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Oracle' && util.ieq(item.title!, 'Learn Java'), { max_count: 1 }),
      ],
    },
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Head First Java'), { max_count: 1 }),
      ],
    },
    excluded: {
      en: [
        catalog.get('Thinking in Java'),
      ],
    },
  }
} satisfies types_data.Course
