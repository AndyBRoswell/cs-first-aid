import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '离散数学',
      author: [ { family: '左', given: '孝凌' }, { family: '李', given: '为鑑' }, { family: '刘', given: '永才' } ],
      edition: 1,
      medium: 'Paperback',
      publisher: '上海科学技术文献出版社',
      'publisher-place': '上海',
      issued: { 'date-parts': [ [ 1982, 9 ] ] },
      ISBN: '9787805130699',
      'number-of-pages': 426,
      language: 'zh-CN',
      URL: 'https://caixuan.aijiaocai.com/textbook/details?textbook_id=395690',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        URL: [
          {
            link: 'https://www.yuntaigo.com/book.action?recordid=bmFvbWFua2M5Nzg3ODA1MTMwNjk5',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://wxtsg.bzpt.edu.cn/museweb/showmarc/table.asp?crc=70C049DB4E250D4E15B07F4E2E00A622&nTmpKzh=314524',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
