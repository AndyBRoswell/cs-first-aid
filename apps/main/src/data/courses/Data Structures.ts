import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数据结构',
  name: [ '数据结构', 'Data Structures' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '数据结构（C++语言版）' && item.author?.some(author => author.family === '邓' && author.given === '俊辉'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === '数据结构' && item.publisher === '清华大学出版社' && item.author?.some(author => author.family === '严' && author.given === '蔚敏'), { count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'The Algorithm Design Manual' && item.author?.some(author => author.family === 'Skiena'), { count: 1 }),
      ],
    },
    reference: {
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Data Structures and Algorithm Analysis in C++' && item.author?.some(author => author.family === 'Weiss'), { count: 1 }),
        ...catalog.filter(item => item.type === 'webpage' && item.title === 'CS3 Data Structures & Algorithms' && item['container-title'] === 'OpenDSA', { count: 1 }),
      ],
    },
    problem_set: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '数据结构习题解析' && item.author?.some(author => author.family === '邓' && author.given === '俊辉'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === '数据结构题集' && item.author?.some(author => author.family === '严' && author.given === '蔚敏'), { count: 1 }),
      ],
    },
    excluded: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '数据结构' && item.publisher === '人民邮电出版社' && item.author?.some(author => author.family === '李' && author.given === '冬梅'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === '数据结构习题解析与实验指导' && item.publisher === '人民邮电出版社' && item.author?.some(author => author.family === '李' && author.given === '冬梅'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
