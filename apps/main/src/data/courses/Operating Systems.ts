import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const I_info = {
  canonical_name: '操作系统 I',
  name: [ '操作系统 I', 'Operating Systems I' ],
  material: {
    text: { en: [
      ...catalog.filter(item => item.type === 'book' && item.title === 'Operating Systems: Three Easy Pieces', { count: 1 }),
    ] },
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === '计算机操作系统' && item.author?.some(author => author.family === '汤' && author.given === '小丹'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === '操作系统：原理与实现' && item.author?.some(author => author.family === '陈' && author.given === '海波'), { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Operating System Concepts' && item.author?.some(author => author.family === 'Silberschatz'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Modern Operating Systems' && item.author?.some(author => author.family === 'Tanenbaum'), { count: 1 }),
        ],
      },
      other: {
        zh: [
          ...catalog.filter(item => item.type === 'webpage' && item.title === '计算机本科生花大量时间写编译器，操作系统是不是不务正业？', { count: 1 }),
          ...catalog.filter(item => item.type === 'webpage' && item.title === '为啥南京大学蒋炎岩老师的操作系统课那么难?', { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title?.startsWith('Windows Internals, Part 1:'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Windows Internals, Part 2', { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
