import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '软件容器化',
  name: [ '软件容器化', 'Software Containerization' ],
  material: {
    reference: {
      course: {
        en: {
          TKT21027: [
            ...catalog.filter(item => item.type === 'document' && item.number === 'TKT21027' && item.genre === 'Lecture notes' && item.version === '2026', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.number === 'TKT21027' && item.genre === 'Assignments and course project' && item.version === '2026', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
