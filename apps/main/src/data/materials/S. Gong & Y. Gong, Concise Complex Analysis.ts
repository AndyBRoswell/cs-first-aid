import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Concise Complex Analysis',
      author: [ { given: 'Sheng', family: 'Gong' }, { given: 'Youhong', family: 'Gong' } ],
      edition: 'Revised',
      medium: 'Hardback',
      publisher: 'World Scientific',
      'publisher-place': 'Singapore',
      issued: { 'date-parts': [ [ 2007, 4 ] ] },
      'original-title': '简明复分析',
      'number-of-pages': 237,
      ISBN: '9789812706935',
      DOI: '10.1142/6457',
      language: 'en',
      URL: 'https://www.worldscientific.com/worldscibooks/10.1142/6457',
      accessed: { 'date-parts': [ [ 2026, 11, 4 ] ] },
      custom: {
        URL: [
          { link: 'https://books.google.com/books?id=ivQFBbv28EQC', display_text: 'Google Books' },
        ],
        variant: [
          {
            type: 'book',
            edition: 'Revised',
            medium: 'eBook',
            ISBN: '9789812770646',
            DOI: '10.1142/6457',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
