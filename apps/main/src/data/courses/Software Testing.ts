import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: '软件测试',
  name: [ '软件测试' ],
  tag: [ '基础必修' ],
  material: {
    reference: {
      book: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Software Testing' && item.author?.some(author => author.family === 'Patton' && author.given === 'Ron'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'The Art of Software Testing' && item.author?.some(author => author.family === 'Myers' && author.given === 'Glenford J.'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'How Google Tests Software' && item.author?.some(author => author.family === 'Whittaker' && author.given === 'James A.'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Software Testing' && item.author?.some(author => author.family === 'Jorgensen' && author.given === 'Paul C.'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Software Engineering at Google' && item.author?.some(author => author.family === 'Winters' && author.given === 'Titus'), { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'The Fuzzing Book', { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'The Debugging Book', { count: 1 }),
          ...catalog.filter(item => item.type === 'book' && item.title === 'Software Foundations', { count: 1 }),
        ],
      },
      other: {
        en: [
          ...catalog.filter(item => item.type === 'document' && item.title === 'Certified Tester Foundation Level Syllabus', { count: 1 }),
          ...catalog.filter(item => item.type === 'article-journal' && item.DOI === '10.1109/MC.1993.274940', { count: 1 }),
        ],
      },
    },
  },
} satisfies types_data.Course
