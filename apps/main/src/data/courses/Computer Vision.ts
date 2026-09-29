import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '计算机视觉',
  name: [ '计算机视觉', 'Computer Vision' ],
  material: {
    reference: {
      text: { en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Vision' && item.custom?.subtitle === 'Algorithms and Applications' && item.author?.some(author => author.family === 'Szeliski'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Foundations of Computer Vision' && item.author?.some(author => author.family === 'Torralba'), { count: 1 }),
      ] },
    },
  },
} satisfies types_data.Course
