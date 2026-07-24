import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'
import * as util from '@/util.ts'

export const info = {
  canonical_name: 'C# 程序设计',
  name: [ 'C# 程序设计', 'C#', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      ...catalog.all().filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Microsoft' && util.default_collator.compare(item.title!, 'A tour of the C# language') === 0)
    ],
    reference: [
      ...catalog.all().filter(item => item.title === 'Head First C#')
    ]
  }
} satisfies data_type.Course
