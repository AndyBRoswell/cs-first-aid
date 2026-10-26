import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as catalog from '@cs-first-aid/bibkit/catalog'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '电路实验',
      author: [ { family: '邹', given: '建龙' }, { family: '高', given: '昕悦' }, { family: '王', given: '超' }, { family: '沈', given: '瑶' }, { family: '赵', given: '彦珍' } ],
      edition: 1,
      medium: '平装',
      dimensions: '16开',
      publisher: '高等教育出版社',
      'publisher-place': '北京',
      issued: { 'date-parts': [ [ 2022, 4, 15 ] ] },
      ISBN: '978-7-04-057703-7',
      'number-of-pages': 168,
      language: 'zh-CN',
      URL: 'https://xuanshu.hep.com.cn/front/book/findBookDetails?bookId=61df1037938b7cc2960ee3ad',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 9 ] ] },
        URL: [
          { link: 'https://www.hep.com.cn/api/v1/books/4a5fcb61-e39f-49a4-9d0b-a0e1cad56ff7', display_text: '高教社官网书目数据' }, // issued
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
