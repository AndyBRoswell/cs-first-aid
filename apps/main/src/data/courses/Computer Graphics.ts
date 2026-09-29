import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '计算机图形学',
  name: [ '计算机图形学', 'Computer Graphics' ],
  material: {
    reference: {
      text: { en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Physically Based Rendering: From Theory to Implementation' && item.author?.some(author => author.family === 'Pharr' && author.given === 'Matt'), { count: 1 }),
      ] },
    },
  },
} satisfies types_data.Course
