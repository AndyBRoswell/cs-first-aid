import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '概率论与数理统计',
      author: [ { family: '韩', given: '旭里' }, { family: '谢', given: '永钦' } ],
      edition: 1,
      publisher: '北京大学出版社',
      issued: { 'date-parts': [ [ 2018, 7 ] ] },
      ISBN: '9787301295472',
      language: 'zh-CN',
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: '概率论与数理统计',
      author: [ { family: '韩', given: '旭里' }, { family: '谢', given: '永钦' } ],
      edition: '修订版',
      publisher: '复旦大学出版社',
      issued: { 'date-parts': [ [ 2010, 4 ] ] },
      ISBN: '9787309049503',
      language: 'zh-CN',
      URL: 'https://www.fudanpress.com/505429541603282944/detail/book?bookId=373564&bookIdentifier=36977368627b1a&company_id=569&company_identifier=2959846655452a&navGuid=505756482248159232',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
