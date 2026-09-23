import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ '普通高等学校本科专业目录（2026年）', '普通高等学校本科专业目录', ],
    material: {
      type: 'document',
      title: '普通高等学校本科专业目录（2026年）',
      author: [ { literal: '中华人民共和国教育部' } ],
      issued: { 'date-parts': [ [ 2026, 4 ] ] },
      publisher: '中华人民共和国教育部',
      language: 'zh-CN',
      URL: 'https://www.moe.gov.cn/srcsite/A08/moe_1034/s3882/202604/t20260427_1434931.html',
      accessed: { 'date-parts': [ [ 2026, 9, 23 ] ] },
      custom: {
        URL: [
          {
            link: 'https://www.moe.gov.cn/jyb_xwfb/gzdt_gzdt/s5987/202604/t20260428_1435016.html',
            display_text: '《普通高等学校本科专业目录（2026年）》发布',
          } satisfies types_data.Link,
        ],
        free_material: [
          {
            link: 'http://www.moe.gov.cn/srcsite/A08/moe_1034/s3882/202604/W020260427440749576927.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
          } satisfies types_data.Link,
        ],
      } satisfies CSL.Custom,
    } satisfies CSL.Item,
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]