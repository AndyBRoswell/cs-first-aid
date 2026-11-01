import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数据隐私',
  name: [ '数据隐私', 'Data Privacy' ],
  material: {
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Database Anonymization', { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Programming Differential Privacy', { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'The Algorithmic Foundations of Differential Privacy', { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Hands-On Differential Privacy', { count: 1 }),
        ],
      },
      lecture_notes_and_slides: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.number === 'CS590 DSP' && item.custom?.institution?.includes('Purdue University') && item.version === 'Spring 2022', { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
