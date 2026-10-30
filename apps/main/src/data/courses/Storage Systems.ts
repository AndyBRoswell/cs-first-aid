import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '存储系统',
  name: [ '存储系统', 'Storage Systems' ],
  material: {
    reference: {
      vu: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.number === 'XM_0092' && item.genre === 'Lecture slides' && item.version === 'Autumn 2023', { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.number === 'XM_0092' && item.genre === 'Laboratory manual' && item.version === '4.0', { count: 1 }),
        ],
      },
      eth: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.number === '227-0085-44L' && item.genre === 'Lecture slides' && item.version === 'Spring 2023', { count: 1 }),
          ...catalog.filter(item => item.type === 'motion_picture' && item.number === '227-0085-44L' && item.version === 'Spring 2023', { count: 1 }),
        ],
      },
      crete: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.number === 'CS647' && item.genre === 'Lecture slides' && item.version === '2022–2023', { count: 1 }),
          ...catalog.filter(item => item.type === 'document' && item.number === 'CS647' && item.genre === 'Assignments' && item.version === '2022', { count: 1 }),
        ],
      },
      harvard: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.number === 'CS2640' && item.genre === 'Lecture slides' && item.version === 'Spring 2026', { count: 1 }),
          ...catalog.filter(item => item.type === 'webpage' && item.number === 'CS2640' && item.genre === 'Course project and assignments' && item.version === 'Spring 2026', { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
