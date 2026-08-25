import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const standards = [
  {
    id: [ 'GB/T 11533-2011', '标准对数视力表' ],
    material: {
      type: 'standard',
      title: '标准对数视力表',
      'title-short': 'GB/T 11533-2011',
      number: 'GB/T 11533-2011',
      author: [ { literal: '中华人民共和国国家质量监督检验检疫总局' }, { literal: '中国国家标准化管理委员会' } ],
      issued: { 'date-parts': [ [ 2011, 12, 30 ] ] },
      publisher: '中国标准出版社',
      language: 'zh-CN',
      URL: 'https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=A9F9E03A346211223DE34421A85CA1C8',
      accessed: { 'date-parts': [ [ 2026, 8, 20 ] ] },
    } satisfies CSL.Item,
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]

export { standards as entries }