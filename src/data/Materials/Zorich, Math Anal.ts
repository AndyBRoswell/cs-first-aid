import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      'Zorich, Math Anal 1',
      'Zorich, Mathematical Analysis 1',
      { unordered_author: 'Zorich', title: 'Mathematical Analysis', vol: 1 },
    ],
    material: {
      type: 'book',
      id: 'Zorich, Math Anal 1',
      title: '数学分析',
      volume: 1,
      edition: 7,
      author:[ { given: 'Владимир Антонович', family: 'Зорич' } ],
      translator: [ { family: '李', given: '植', } ],
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [[ 2019, 2, 18 ] ] },
      ISBN: '978-7-04-028755-4',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/b84288b0-b931-47ea-b5d1-0d5a444476b9',
      accessed: { 'date-parts': [[ 2026, 4, 25 ] ] },
    },
  },
  // 📗 第二卷
  {
    id: [
      'Zorich, Math Anal 2',
      'Zorich, Mathematical Analysis 2',
      { unordered_author: 'Zorich', title: 'Mathematical Analysis', vol: 2 },
    ],
    material: {
      type: 'book',
      id: 'Zorich, Math Anal 2',
      title: '数学分析',
      volume: 2,
      edition: 7,
      author:[ { given: 'Владимир Антонович', family: 'Зорич' } ],
      translator: [ { family: '李', given: '植', } ],
      publisher: '高等教育出版社',
      "publisher-place": '北京市',
      issued: { 'date-parts': [[ 2019, 2, 18 ] ] },
      ISBN: '978-7-04-028756-1',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/9cd95af0-f479-469d-bc60-2b9f6e4fc9b7',
      accessed: { 'date-parts': [[ 2026, 4, 25 ] ] },
    },
  },
] satisfies catalog.Item[]

catalog.add_items(items)