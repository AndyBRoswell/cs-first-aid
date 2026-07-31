import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'
import * as util from '@/util.ts'

export const info = {
  canonical_name: 'Python 程序设计',
  name: [ 'Python 程序设计', 'Python', ],
  tag: [ '基础选修' ],
  material: {
    text: [
      ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.literal === 'Python Software Foundation' && util.ieq(item.title!, 'The Python Tutorial'), { max_count: 1 }),
    ],
    reference: [
      ...catalog.filter(item => item.author?.length === 1 && item.author![0]!.family === 'Matthes' && util.ieq(item.title!, 'Python Crash Course'), { max_count: 1 }),
      ...catalog.filter(item => item.author?.some(author => author.family === '嵩' && author.given === '天') && util.ieq(item.title!, 'Python语言程序设计基础'), { max_count: 1 }),
    ],
  }
} satisfies data_type.Course
