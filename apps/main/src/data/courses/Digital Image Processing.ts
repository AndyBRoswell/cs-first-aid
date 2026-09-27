import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: '数字图像处理',
  name: [ '数字图像处理', ],
  material: {
    reference: [
      ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Digital Image Processing, Global Edition') && item.author?.some(author => author.family === 'Gonzalez') && item.edition === 4, { count: 1 }),
    ],
  },
} satisfies types_data.Course
