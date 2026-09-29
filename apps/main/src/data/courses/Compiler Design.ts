import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const I_info = {
  canonical_name: '编译原理 I',
  name: [ '编译原理 I', 'Compiler Design I' ],
  material: {
    text: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Engineering a Compiler' && item.author?.some(author => author.family === 'Cooper'), { count: 1 }),
      ],
    },
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Compilers: Principles, Techniques, and Tools' && item.author?.some(author => author.family === 'Aho'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Modern Compiler Implementation in C' && item.author?.some(author => author.family === 'Appel'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Advanced Compiler Design and Implementation' && item.author?.some(author => author.family === 'Muchnick'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Compiler Construction' && item.author?.some(author => author.family === 'Louden'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Parsing Techniques' && item.author?.some(author => author.family === 'Grune'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Modern Compiler Design' && item.author?.some(author => author.family === 'Grune'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
