import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '算法分析与设计',
  name: [ '算法分析与设计', '算法设计与分析', '算法', 'Algorithm Analysis and Design' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '算法设计与分析' && item.author?.some(author => author.family === '屈' && author.given === '婉玲'), { count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Algorithms' && item.author?.some(author => author.family === 'Erickson' && author.given === 'Jeff'), { count: 1 }),
      ],
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.publisher === 'bilibili' && item['event-place'] === '北京大学' && item.custom?.lecturer?.some(lecturer => lecturer.family === '屈' && lecturer.given === '婉玲') && item.title?.includes('算法设计与分析'), { count: 1 }),
      ],
    },
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Algorithms' && item.author?.some(author => author.family === 'Cormen'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Algorithms' && item.author?.some(author => author.family === 'Sedgewick' && author.given === 'Robert'), { count: 1 }),
        ],
      },
      guide: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === '算法设计与分析习题解答与学习指导' && item.author?.some(author => author.family === '屈' && author.given === '婉玲'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
