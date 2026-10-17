import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '机器学习',
  name: [ '机器学习', 'Machine Learning' ],
  material: {
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === '机器学习' && item.author?.some(author => author.family === '周' && author.given === '志华'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === '机器学习方法' && item.author?.some(author => author.family === '李' && author.given === '航'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === '神经网络与深度学习' && item.author?.some(author => author.family === '邱' && author.given === '锡鹏'), { count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'An Introduction to Statistical Learning' && item.author?.some(author => author.family === 'Hastie'), { count: 2 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'The Elements of Statistical Learning' && item.author?.some(author => author.family === 'Hastie') && item.author?.some(author => author.family === 'Friedman'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Pattern Recognition and Machine Learning' && item.author?.some(author => author.family === 'Bishop'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Deep Learning' && item.author?.some(author => author.family === 'Goodfellow'), { count: 1 }),
        ],
      },
      guide: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && item.title === '机器学习公式详解' && item.author?.some(author => author.family === '谢' && author.given === '文睿'), { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
