import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '安全编程',
  name: [ '安全编程', 'Secure Programming' ],
  material: {
    reference: {
      course: {
        en: {
          'CSE 365': [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/cse365-f2026/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse365-f2026/module-3/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse365-f2026/module-6/', { count: 1 }),
          ],
          OST2: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://ost2.fyi/Secure-Software-Design-and-Implementation.html', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
