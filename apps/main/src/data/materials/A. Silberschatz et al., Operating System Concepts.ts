import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Operating System Concepts',
      author: [ { given: 'Abraham', family: 'Silberschatz' }, { given: 'Peter B.', family: 'Galvin' }, { given: 'Greg', family: 'Gagne' } ],
      publisher: 'Wiley',
      issued: { 'date-parts': [ [ 2021, 2 ] ] },
      edition: 10,
      language: 'en-US',
      medium: 'Print',
      ISBN: '978-1-119-80036-1',
      URL: 'https://www.wiley.com/en-us/shop/general-end-user-computing/operating-system-concepts-10th-edition-p-9781119800361',
      accessed: { 'date-parts': [[2026, 9, 29]] },
      "original-date": { 'date-parts': [[2018, 4]] },
      "original-publisher": 'Wiley',
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9781119320913',
            issued: { 'date-parts': [ [ 2018, 4 ] ] },
            URL: 'https://www.wiley.com/en-us/Operating+System+Concepts%2C+10th+Edition-p-9781119320913',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
