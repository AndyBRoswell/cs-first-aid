import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'Web 安全',
  name: [ 'Web 安全', 'Web Security' ],
  material: {
    reference: {
      course: {
        en: {
          'CSE 365': [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/cse365-f2026/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse365-f2026/module-3/', { count: 1 }),
          ],
          'CSE 598 ASOW': [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/cse598-asow-f2026/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/hosts-and-proxies/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/http-requests/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/cookies-and-session-ids/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/authentication/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/cmd-injection/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/path-traversal/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/csrf/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-asow-f2026/xss/', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
