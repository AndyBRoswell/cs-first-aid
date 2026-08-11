import * as data_type from '../../../../../packages/bibkit/src/types/data.ts'
import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import '@/data/courses/import course materials.ts'
import * as util from '../../../../../packages/common/util.ts'

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
} satisfies data_type.Course
