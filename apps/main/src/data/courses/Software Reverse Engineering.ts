import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '软件逆向工程',
  name: [ '软件逆向工程', 'Software Reverse Engineering' ],
  material: {
    reference: {
      course: {
        en: {
          cse365: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/cse365-f2026/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse365-f2026/module-5/', { count: 1 }),
          ],
          cse466: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/cse466-f2026/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse466-f2026/assembly/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse466-f2026/reverse-engineering/', { count: 1 }),
          ],
          cse598_revpa: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/reversing-hell/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/babyc/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/babyprofile/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/babypyc/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/babyrev/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/babyvm/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/project_0/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/project_1/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/project_21/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/project_22/', { count: 1 }),
          ],
          cse598_avr: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/cse598-avr-f2024/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-avr-f2024/xnu-mach-ipc/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-avr-f2024/xnu-mach-ports/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-avr-f2024/xnu-iokit/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-avr-f2024/xnu-pac/', { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/cse598-avr-f2025/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/cse598-avr-f2025/what-is-a-bug/', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
