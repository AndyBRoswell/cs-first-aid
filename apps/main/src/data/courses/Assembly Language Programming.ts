import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '汇编语言程序设计',
  name: [ '汇编语言程序设计' ],
  tag: [ '基础选修' ],
  material: {
    text: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Assembly Language for x86 Processors' && item.author?.some(author => author.family === 'Irvine' && author.given === 'Kip R.'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
