import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Probability and Random Processes',
      author: [ { given: 'Geoffrey R.', family: 'Grimmett' }, { given: 'David R.', family: 'Stirzaker' } ],
      edition: 3,
      medium: 'Paperback',
      publisher: 'Oxford University Press',
      issued: { 'date-parts': [ [ 2001 ] ] },
      ISBN: '9780198572220',
      language: 'en',
      URL: 'https://library.kaist.ac.kr/search/ctlgSearch/posesn/view.do?bibctrlno=589416&ty=B',
      accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            edition: 3,
            medium: 'Hardback',
            ISBN: '9780198572237',
            issued: { 'date-parts': [ [ 2001 ] ] },
            URL: 'https://academic.oup.com/book/52807',
            accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
          },
          {
            type: 'book',
            edition: 3,
            medium: 'eBook (Oxford Academic)',
            issued: { 'date-parts': [ [ 2001 ] ] },
            ISBN: '9781383030105',
            DOI: '10.1093/oso/9780198572237.001.0001',
            URL: 'https://academic.oup.com/book/52807',
            accessed: { 'date-parts': [ [ 2026, 10, 8 ] ] },
          },
        ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
