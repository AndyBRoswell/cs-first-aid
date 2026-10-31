import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数据采集与分析',
  name: [ '数据采集与分析', 'Data Acquisition and Analysis' ],
  material: {
    reference: {
      course: {
        en: {
          'INF2-FDS': [
            ...catalog.filter(item => item.type === 'document' && item.number === 'INF2-FDS' && item.genre === 'Lecture notes' && item.version === '2026-01-19', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.number === 'INF2-FDS' && item.genre === 'Laboratory notebooks' && item.version === '2025–2026', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.number === 'INF2-FDS' && item.genre === 'Workshop exercises' && item.version === '2025–2026', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
