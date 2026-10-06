import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '复变函数',
  name: [ '复变函数', '复分析', 'Complex Analysis' ],
  material: {
    reference: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '复变函数' && item.author?.some(author => author.family === '史' && author.given === '济怀'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === '简明复分析' && item.author?.some(author => author.family === '龚' && author.given === '昇') && item.edition === 2, { count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Fundamentals of Complex Analysis with Applications to Engineering, Science, and Mathematics' && item.author?.some(author => author.family === 'Saff'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Variables and Applications' && item.author?.some(author => author.family === 'Brown'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Visual Complex Analysis' && item.author?.some(author => author.family === 'Needham'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Variables: Introduction and Applications' && item.author?.some(author => author.family === 'Ablowitz'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Analysis' && item.author?.some(author => author.family === 'Stein'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Analysis' && item.author?.some(author => author.family === 'Lang'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Analysis' && item.author?.some(author => author.family === 'Howell'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'A First Course in Complex Analysis' && item.author?.some(author => author.family === 'Beck'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Analysis' && item.author?.some(author => author.family === 'Cain'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Introduction to Complex Analysis' && item.author?.some(author => author.family === 'Taylor'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Guide to Cultivating Complex Analysis: Working the Complex Field' && item.author?.some(author => author.family === 'Lebl'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Topics in Complex Analysis' && item.author?.some(author => author.family === 'Romik'), { count: 1 }),
        ...catalog.filter(item => item.type === 'document' && item.title === 'Complex Variables with Applications: Lecture Notes' && item.author?.some(author => author.family === 'Orloff'), { count: 1 }),
        ...catalog.filter(item => item.type === 'book' && item.title === 'Complex Analysis: A Visual and Interactive Introduction' && item.author?.some(author => author.family === 'Ponce Campuzano'), { count: 1 }),
      ],
    },
  },
} satisfies types_data.Course
