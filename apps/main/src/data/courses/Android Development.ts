import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'Android 开发',
  name: [ 'Android 开发', 'Android' ],
  material: {
    text: [
      ...catalog.filter(item => item.type === 'webpage' && item.title === 'Developer Guides' && item.author?.some(author => author.literal === 'Google'), { count: 1 }),
    ],
    reference: [
      ...catalog.filter(item => item.type === 'book' && item.title === '第一行代码：Android' && item.author?.some(author => author.family === '郭' && author.given === '霖') && item.edition === 3, { count: 1 }),
    ],
  },
} satisfies types_data.Course
