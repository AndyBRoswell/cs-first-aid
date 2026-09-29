import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '计算机组成原理',
  name: [ '计算机组成原理', 'Computer Organization' ],
  material: {
    text: { en: [
      ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Organization and Design ARM Edition' && item.edition === 1, { count: 1 }),
      ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Organization and Design RISC-V Edition' && item.edition === 1, { count: 1 }),
      ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Organization and Design RISC-V Edition' && item.edition === 2, { count: 1 }),
    ] },
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === '计算机组成原理' && item.author?.some(author => author.family === '唐' && author.given === '朔飞') && item.edition === 3, { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === "Computer Systems: A Programmer's Perspective" && item.author?.some(author => author.family === 'Bryant'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Organization and Design MIPS Edition' && item.edition === 6, { count: 1 }),
        ],
      },
      guide: { zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '计算机组成原理——学习指导与习题解答' && item.author?.some(author => author.family === '唐' && author.given === '朔飞'), { count: 1 }),
      ] },
    },
  },
} satisfies types_data.Course
