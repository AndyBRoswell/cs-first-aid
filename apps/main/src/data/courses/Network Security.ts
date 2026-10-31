import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '网络安全',
  name: [ '网络安全', 'Network Security' ],
  material: {
    reference: {
      course: {
        en: {
          ost2: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://ost2.fyi/Bluetooth.html', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
