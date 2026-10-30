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
      lab: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.number === 'XB_0003 / XM_0139' && item.genre === 'Laboratory manual' && item.version === '2025', { count: 1 }),
        ],
      },
      tutorial: {
        llvm: {
          en: [
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'My First Language Frontend with LLVM Tutorial' && item.author?.some(author => author.literal === 'LLVM Project'), { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Building a JIT in LLVM' && item.author?.some(author => author.literal === 'LLVM Project'), { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Writing an LLVM Pass' && item.author?.some(author => author.literal === 'LLVM Project'), { count: 1 }),
          ],
        },
        clang: {
          en: [
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Introduction to the Clang AST' && item.author?.some(author => author.literal === 'The Clang Team'), { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'How to write RecursiveASTVisitor based ASTFrontendActions.' && item.author?.some(author => author.literal === 'The Clang Team'), { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Tutorial for building tools using LibTooling and LibASTMatchers' && item.author?.some(author => author.literal === 'The Clang Team'), { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Clang Transformer Tutorial' && item.author?.some(author => author.literal === 'The Clang Team'), { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Clang Plugins' && item.author?.some(author => author.literal === 'The Clang Team'), { count: 1 }),
            ...catalog.filter(item => item.type === 'webpage' && item.title === 'Data flow analysis: an informal introduction' && item.author?.some(author => author.literal === 'The Clang Team'), { count: 1 }),
          ],
        },
      },
    },
  },
} satisfies types_data.Course
