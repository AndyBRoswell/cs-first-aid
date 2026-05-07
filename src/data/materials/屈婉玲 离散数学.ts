import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      '屈婉玲 离散数学',
      '屈婉玲 离散数学 第3版',
      '屈婉玲 离散数学 2024',
      '屈婉玲 曹永知 耿素云 张立昂 离散数学',
      '屈婉玲 曹永知 耿素云 张立昂 离散数学 第3版',
      '屈婉玲 曹永知 耿素云 张立昂 离散数学 2024',
      { unordered_author: [ '屈婉玲', '曹永知', '耿素云', '张立昂' ], title: '离散数学', edition: 3 },
      { unordered_author: [ '屈婉玲', '曹永知', '耿素云', '张立昂' ], title: '离散数学', date: 2024 },
    ],
    material: {
      type: 'book',
      id: '屈婉玲 曹永知 耿素云 张立昂 离散数学 第3版',
      author: [ { family: '屈', given: '婉玲' }, { family: '曹', given: '永知' }, { family: '耿', given: '素云' }, { family: '张', given: '立昂' } ],
      title: '离散数学',
      edition: 3,
      issued: { 'date-parts': [ [ 2024, 6, 18 ] ] },
      publisher: '高等教育出版社',
      ISBN: '978-7-04-061620-0' as CSL_Data.ISBN,
      language: 'zh-CN',
      "number-of-pages": 508,
      "collection-title": '普通高等教育“十一五”国家级规划教材',
      URL: 'https://www.hep.com.cn/book/show/2d67dc4c-217a-41db-81b2-56bfe7428879',
      accessed: { 'date-parts': [ [ 2025, 5, 22 ] ] },
      custom: {
        "collection-title-short": '“十一五”国家规划教材',
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
  {
    id: [
      '屈婉玲 离散数学学习指导与习题解析',
      '屈婉玲 离散数学学习指导与习题解析 第3版',
      '屈婉玲 离散数学学习指导与习题解析 2024',
      '屈婉玲 曹永知 耿素云 张立昂 离散数学学习指导与习题解析',
      '屈婉玲 曹永知 耿素云 张立昂 离散数学学习指导与习题解析 第3版',
      '屈婉玲 曹永知 耿素云 张立昂 离散数学学习指导与习题解析 2024',
      { unordered_author: [ '屈婉玲', '曹永知', '耿素云', '张立昂' ], title: '离散数学学习指导与习题解析', edition: 3 },
      { unordered_author: [ '屈婉玲', '曹永知', '耿素云', '张立昂' ], title: '离散数学学习指导与习题解析', date: 2024 },
    ],
    material: {
      type: 'book',
      id: '屈婉玲 曹永知 耿素云 张立昂 离散数学学习指导与习题解析 第3版',
      author: [ { family: '屈', given: '婉玲' }, { family: '曹', given: '永知' }, { family: '耿', given: '素云' }, { family: '张', given: '立昂' } ],
      title: '离散数学学习指导与习题解析',
      edition: 3,
      issued: { 'date-parts': [ [ 2024, 12, 20 ] ] },
      publisher: '高等教育出版社',
      ISBN: '978-7-04-062926-2' as CSL_Data.ISBN,
      "number-of-pages": 580,
      "collection-title": '普通高等教育“十一五”国家级规划教材配套参考书',
      language: 'zh-CN',
      URL: 'https://www.hep.com.cn/book/show/14b2a634-b12a-41f3-ba25-31ca845f4429',
      accessed: { 'date-parts': [ [ 2025, 5, 22 ] ] },
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)