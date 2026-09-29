import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '神经网络与深度学习',
      author: [ { family: '邱', given: '锡鹏' } ],
      edition: 1,
      'printing-number': '1-20',
      medium: 'Paperback',
      publisher: '机械工业出版社',
      issued: { 'date-parts': [ [ 2020, 4, 20 ] ] },
      ISBN: '9787111649687',
      language: 'zh-CN',
      URL: 'https://www.cmpedu.com/books/book/5610213.htm',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 4, 1 ] ] },
        free_material: [
          { link: 'https://github.com/nndl/nndl/releases/download/book-pdf/nndl-v2.pdf', display_text: 'PDF [2e, forthcoming, 2026-07-23]', 'Content-Type': 'application/pdf' },
          { link: 'https://nndl.ai/nndl/legacy/nndl-v1/main.pdf', display_text: 'PDF [1e]', 'Content-Type': 'application/pdf' },
        ],
        variant: [
          { type: 'book', edition: 2, medium: 'PDF', URL: 'https://nndl.ai/nndl-v2/' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
