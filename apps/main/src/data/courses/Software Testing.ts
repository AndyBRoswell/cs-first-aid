import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '软件测试',
  name: [ '软件测试' ],
  tag: [ '基础必修' ],
  material: {
    reference: [
      ...catalog.filter(item => item.type === 'book' && item.title === 'Software Testing' && item.author?.some(author => author.family === 'Patton' && author.given === 'Ron'), { count: 1 }),
    ],
  },
} satisfies types_data.Course
