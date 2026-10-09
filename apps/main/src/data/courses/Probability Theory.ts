import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '概率论',
  name: [ '概率论' ],
  tag: [ '基础必修' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '陈' && author.given === '希孺'), { count: 1 }),
      ],
    },
    reference: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '徐' && author.given === '全智'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '缪' && author.given === '柏其') && item.author?.some(author => author.family === '张' && author.given === '伟平'), { count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'A First Look at Rigorous Probability Theory' && item.author?.some(author => author.family === 'Rosenthal') && item.edition === 2, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Probability: Theory and Examples' && item.author?.some(author => author.family === 'Durrett') && item.edition === 5, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Probability' && item.author?.some(author => author.family === 'Grinstead') && item.edition === 2, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Probability and Random Processes' && item.author?.some(author => author.family === 'Grimmett') && item.edition === 3, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Probability and Stochastic Processes' && item.author?.some(author => author.family === 'Yates') && item.edition === 3, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Probability' && item.author?.some(author => author.family === 'Bertsekas') && item.edition === 2, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Probability' && item.author?.some(author => author.family === 'Anderson'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Probability' && item.author?.some(author => author.family === 'Welsh') && item.edition === 2, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Probability and Statistics for Computer Scientists' && item.author?.some(author => author.family === 'Baron') && item.edition === 3, { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Probability, Statistics, and Random Processes' && item.author?.some(author => author.family === 'Pishro-Nik'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Fundamentals of Probability' && item.author?.some(author => author.family === 'Ghahramani') && item.edition === 5, { count: 1 }),
      ],
    },
    excluded: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '概率论与数理统计' && item.author?.some(author => author.family === '韩' && author.given === '旭里') && item.publisher === '复旦大学出版社', { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
