import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'Shell 程序设计',
  name: [ 'Shell 程序设计' ],
  tag: [ '基础必修' ],
  material: {
    text: [
      ...catalog.filter(item => item.type === 'webpage' && item.title === 'PowerShell learning resources' && item['container-title'] === 'Microsoft Learn', { count: 1 }),
    ],
  },
} satisfies types_data.Course
