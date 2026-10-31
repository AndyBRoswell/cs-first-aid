import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '汇编语言程序设计',
  name: [ '汇编语言程序设计' ],
  tag: [ '基础选修' ],
  material: {
    text: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Assembly Language for x86 Processors' && item.author?.some(author => author.family === 'Irvine' && author.given === 'Kip R.'), { count: 1 }),
      ],
    },
    reference: {
      course: {
        en: {
          cse598_revpa: [
            ...catalog.filter(item => item.type === 'webpage' && item.URL === 'https://pwn.college/reversing-hell/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/your-first-program/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/memory/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/hello-hackers/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/assembly-crash-course/', { count: 1 }),
            ...catalog.filter(item => item.type === 'document' && item.URL === 'https://pwn.college/reversing-hell/debugging-refresher/', { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
