import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as catalog from '@cs-first-aid/bibkit/catalog'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '电路（第6版）学习指导与习题分析',
      author: [ { family: '刘', given: '崇新' }, { family: '罗', given: '先觉' } ],
      edition: 1,
      medium: '平装',
      dimensions: '16开',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2024, 6, 24 ] ] },
      ISBN: '978-7-04-062163-1',
      'number-of-pages': 436,
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=667d9d4f74ce561611bda10f',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 8 ] ] },
        URL: [
          { link: 'https://www.hep.com.cn/api/v1/books/27cfdae8-1254-4b68-8547-f31b0d156d10', display_text: '高教社官网书目数据' }, // issued
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

export function resolve_relations(): void {
  const material: types_data.Material = entries[0]!.material
  material.custom!.companion = catalog.filter(
    item => item.type === 'book'
      && /^电路(?:（第6版）)?$/u.test(item.title ?? '')
      && item.edition === 6
      && item.author?.some(author => author.family === '邱' && author.given === '关源'),
    { count: 1 }
  )
}
