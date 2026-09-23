import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: '教育部学位管理与研究生教育司负责人就《“博士+硕士”双学位项目试点设置管理办法》答记者问',
      publisher: '中华人民共和国教育部',
      issued: { 'date-parts': [ [ 2025, 12, 29 ] ] },
      accessed: { 'date-parts': [ [ 2026, 9, 23 ] ] },
      language: 'zh-CN',
      URL: 'https://hudong.moe.gov.cn/jyb_xwfb/s271/202512/t20251229_1424834.html',
      custom: {
        URL: [
          {
            link: 'https://www.moe.gov.cn/jyb_xwfb/s271/202512/t20251229_1424834.html',
            display_text: '教育部政府门户网站',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]