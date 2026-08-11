import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/courses/import course materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: 'C# 程序设计',
  name: [ 'C# 程序设计', 'C#', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Microsoft' && util.ieq(item.title!, 'A tour of the C# language'))
    ],
    reference: [
      ...catalog.filter(item => util.ieq(item.title!, 'Head First C#'))
    ]
  }
} satisfies types_data.Course
