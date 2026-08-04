import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: '数学分析',
      "number-of-volumes": 2,
      volume: 1,
      edition: 7,
      author:[ { given: 'Владимир Антонович', family: 'Зорич' } ],
      translator: [ { family: '李', given: '植', } ],
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [[ 2019, 2, 18 ] ] },
      ISBN: '978-7-04-028755-4' as CSL_Data.ISBN,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/b84288b0-b931-47ea-b5d1-0d5a444476b9',
      accessed: { 'date-parts': [[ 2026, 4, 25 ] ] },
    },
  },
  // 📗 第二卷
  {
    id: [
    ],
    material: {
      type: 'book',
      title: '数学分析',
      "number-of-volumes": 2,
      volume: 2,
      edition: 7,
      author:[ { given: 'Владимир Антонович', family: 'Зорич' } ],
      translator: [ { family: '李', given: '植', } ],
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [[ 2019, 2, 18 ] ] },
      ISBN: '978-7-04-028756-1' as CSL_Data.ISBN,
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/9cd95af0-f479-469d-bc60-2b9f6e4fc9b7',
      accessed: { 'date-parts': [[ 2026, 4, 25 ] ] },
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)