import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: '实变函数',
  name: [ '实变函数', ],
  material: {
    reference: {
      en: [
        ...catalog.filter(item => item.author?.some(author => author.family === 'Stein') && item.author?.some(author => author.family === 'Shakarchi') && util.ieq(item.title!, 'Real Analysis'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Rudin') && util.ieq(item.title!, '实分析与复分析'), { max_count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
