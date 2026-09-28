import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '数理统计',
  name: [ '数理统计' ],
  tag: [ ],
  material: {
    text: [
      ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '陈' && author.given === '希孺'), { count: 1 }),
    ],
    reference: [
      ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '徐' && author.given === '全智'), { count: 1 }),
      ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '缪' && author.given === '柏其') && item.author?.some(author => author.family === '张' && author.given === '伟平'), { count: 1 }),
    ],
    excluded: [
      ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '韩' && author.given === '旭里') && item.publisher === '复旦大学出版社', { count: 1 }),
    ],
  },
} satisfies types_data.Course
