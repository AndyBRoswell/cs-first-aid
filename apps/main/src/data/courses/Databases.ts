import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const I_info = {
  canonical_name: '数据库 I',
  name: [ '数据库 I', 'Databases I' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '数据库系统概论' && item.author?.some(author => author.family === '王' && author.given === '珊'), { count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Database System Concepts' && item.author?.some(author => author.family === 'Silberschatz'), { count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && /^数据库系统概论(?:（第\d+版）)?习题解析与实验指导$/u.test(item.title ?? '') && item.author?.some(author => author.family === '王' && author.given === '珊'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
