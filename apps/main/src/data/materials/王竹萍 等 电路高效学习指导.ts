import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as catalog from '@cs-first-aid/bibkit/catalog'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '电路高效学习指导',
      author: [ { family: '王', given: '竹萍' }, { family: '张', given: '涛' }, { family: '刘', given: '申阳' } ],
      contributor: [ { family: '齐', given: '超' } ],
      edition: 2,
      medium: '平装',
      dimensions: '16开',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2025, 6, 19 ] ] },
      ISBN: '978-7-04-064514-9',
      'number-of-pages': 320,
      language: 'zh-CN',
      note: '齐超主审。配套邱关源、罗先觉《电路》第6版。',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=67dd9c28e119ac9729c78422',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2025, 6 ] ] },
        URL: [
          { link: 'https://www.hep.com.cn/api/v1/books/ea67852f-49b4-43de-bcef-4f4b4ee32b5b', display_text: '高教社官网书目数据' }, // issued
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
