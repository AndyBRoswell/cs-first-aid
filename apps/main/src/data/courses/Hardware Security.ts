import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '硬件安全',
  name: [ '硬件安全', 'Hardware Security' ],
  material: {
    reference: {
      course: {
        en: {
          OST2: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://ost2.fyi/Firmware-Security.html', { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://ost2.fyi/System-Security.html', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
