import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

const wikipedia_titles = [
  'List of network protocols (OSI model)',
  'Internet protocol suite',
  'Category:Application layer protocols',
  'Category:Presentation layer protocols',
  'Category:Session layer protocols',
  'Category:Transport layer protocols',
  'Category:Internet layer protocols',
  'Category:Link protocols',
  'Category:Physical layer protocols',
]

export const I_info = {
  canonical_name: '计算机网络 I',
  name: [ '计算机网络 I', 'Computer Networks I' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '计算机网络' && item.author?.some(author => author.family === '谢' && author.given === '希仁'), { count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Networking' && item.author?.some(author => author.family === 'Kurose'), { count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '计算机网络释疑与习题解答' && item.author?.some(author => author.family === '谢' && author.given === '希仁'), { count: 1 }),
      ],
    },
    lab: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && item.title === '计算机网络综合实验教程——协议分析与应用' && item.author?.some(author => author.family === '李' && author.given === '志远'), { count: 1 }),
      ],
    },
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.type === 'book' && item.title === 'Computer Networks' && item.author?.some(author => author.family === 'Tanenbaum'), { count: 1 }),
        ],
      },
      other: {
        en: wikipedia_titles.flatMap(title => catalog.filter(item => item.type === 'webpage' && item.title === title && item['container-title'] === 'Wikipedia', { count: 1 })),
      },
    },
  },
} satisfies types_data.Course
