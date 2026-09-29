import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '机器学习公式详解',
      author: [ { family: '谢', given: '文睿' }, { family: '秦', given: '州' }, { family: '贾', given: '彬彬' } ],
      edition: 2,
      medium: '纸书',
      publisher: '人民邮电出版社',
      issued: { 'date-parts': [ [ 2023, 6, 1 ] ] },
      language: 'zh-CN',
      ISBN: '978-7-115-61572-5',
      "number-of-pages": 308,
      URL: 'https://www.epubit.com/bookDetails?id=UB83084a1de8cbf',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        free_material: [ { link: 'https://github.com/datawhalechina/pumpkin-book/releases/download/v2.0.0/pumpkin_book.pdf', display_text: '开源版 PDF（非纸书定稿）', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-4.0' } ],
        URL: [
          { link: 'https://www.dedao.cn/ebook/detail?id=5kMLgX2vKGy7x5M8YRoDQbLgqkEeAw27RzR0BNn2r6ljVPO1mX9ad4JZpzZn1Rbe', display_text: '得到电子书' },
          { link: 'https://www.kobo.com/nl/nl/ebook/MuC0kLNDXzmyiWSpuhZSrQ', display_text: 'Kobo 电子书' },
          { link: 'https://github.com/datawhalechina/pumpkin-book', display_text: '作者开源项目' },
          { link: 'https://jiabinbin-ai.github.io/preparation/', display_text: '作者主页' },
        ],
        variant: [
          { type: 'book', edition: 2, medium: 'Paperback', publisher: '人民邮电出版社', issued: { 'date-parts': [ [ 2023, 6 ] ] }, ISBN: '9787115615725', URL: 'https://www.epubit.com/bookDetails?id=UB83084a1de8cbf' },
          { type: 'book', version: '2.0.0', medium: 'PDF', issued: { 'date-parts': [ [ 2023, 11, 17 ] ] }, URL: 'https://github.com/datawhalechina/pumpkin-book/releases/tag/v2.0.0' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
