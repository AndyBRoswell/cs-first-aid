import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '并行与分布式计算',
  name: [ '并行与分布式计算', ],
  material: {
    reference: {
      en: [
        ...catalog.filter(material => material.type === 'webpage' && material.title === 'Algorithms for Modern Hardware' && material.author?.some(author => author.given === 'Sergey' && author.family === 'Slotin'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
