import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数字信号处理',
  name: [ '数字信号处理', 'Digital Signal Processing' ],
  material: {
    reference: {
      text: { en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Discrete-Time Signal Processing' && item.author?.some(author => author.family === 'Oppenheim'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Digital Signal Processing: Principles, Algorithms and Applications' && item.author?.some(author => author.family === 'Proakis'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Digital Signal Processing: A Computer-Based Approach' && item.author?.some(author => author.family === 'Mitra'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'An Introduction to Statistical Signal Processing' && item.author?.some(author => author.family === 'Gray'), { count: 1 }),
      ] },
    },
  },
} satisfies types_data.Course
