import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'Web 开发',
  name: [ 'Web 开发' ],
  tag: [ '基础必修' ],
  material: {
    text: {
      en: [
        ...catalog.filter(item => item.type === 'webpage' && item.title === 'Learn web development' && item['container-title'] === 'MDN Web Docs', { count: 1 }),
        ...catalog.filter(item => item.type === 'webpage' && item.title === 'Learn web development' && item['container-title'] === 'web.dev', { count: 1 }),
      ],
    },
    reference: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'SSM + Spring Boot + Vue.js 3全栈开发从入门到实战' && item.author?.some(author => author.family === '陈' && author.given === '恒'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
