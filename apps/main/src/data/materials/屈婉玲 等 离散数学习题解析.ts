import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { family: '屈', given: '婉玲' }, { family: '耿', given: '素云' }, { family: '王', given: '捍贫' }, { family: '刘', given: '田' }, ],
      title: '离散数学习题解析',
      editor: [ { family: '沈', given: '承凤' } ],
      publisher: '北京大学出版社',
      "publisher-place": '北京',
      issued: { 'date-parts': [ [ 2008, 1 ] ] },
      ISBN: '9787301098011',
      language: 'zh-CN',
      URL: 'https://book.douban.com/subject/2201366/',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        "collection-title": [ '高等院校计算机专业及专业基础课系列教材', ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
