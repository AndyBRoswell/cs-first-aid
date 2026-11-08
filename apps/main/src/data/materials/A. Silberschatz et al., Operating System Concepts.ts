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
        URL: [
          { link: 'https://www.zybooks.com/catalog/silberschatz-operating-system-concepts-10th-edition/', display_text: 'zyBooks: Operating System Concepts (zyVersion, interactive edition)' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9781119320913',
            issued: { 'date-parts': [ [ 2018, 4 ] ] },
            URL: 'https://www.wiley.com/en-us/Operating+System+Concepts%2C+10th+Edition-p-9781119320913',
          },
          {
            type: 'book',
            title: 'Silberschatz\'s Operating System Concepts',
            medium: 'Paperback',
            dimensions: '252 × 201 × 36 mm',
            issued: { 'date-parts': [ [ 2019, 7 ] ] },
            ISBN: '9781119454083',
            'number-of-pages': 896,
            URL: 'https://www.wiley.com/en-gb/silberschatz%27s-operating-system-concepts-global-edition-10th-edition-p-9781119454083',
            accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
            custom: {
              edition: 'Global Edition',
              weight: '1656 g',
              URL: [
                { link: 'https://www.akademika.no/en/teknologi/data-og-informasjonsteknologi/silberschatzs-operating-system-concepts-global-edition/9781119454083', display_text: 'Akademika' }, // dimensions, weight
                { link: 'https://media.wiley.com/product_data/excerpt/85/11194540/1119454085-18.pdf', display_text: 'Wiley: Table of Contents (PDF)' },
              ],
            },
          },
          {
            type: 'book',
            medium: 'Paperback',
            dimensions: '24 cm',
            'publisher-place': 'Hoboken, NJ',
            issued: { 'date-parts': [ [ 2019 ] ] },
            ISBN: '9781119586166',
            'number-of-pages': 'xxvi + 1006 + 24 + 57 + 42 + 26', // CiNii includes the 4 separately paginated appendices.
            URL: 'https://webpac.lib.itb.ac.id/find/detail/147240',
            accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
            note: '4 separately paginated appendices (24, 57, 42, and 26 pages) are inserted between pages 897 and 901.',
            custom: {
              edition: 'Asia Edition',
              URL: [
                { link: 'https://cir.nii.ac.jp/crid/1971993809756396838', display_text: 'CiNii Books' }, // publisher-place, number-of-pages, separately paginated appendices
                { link: 'https://www.tenlong.com.tw/products/9781119586166', display_text: 'Tenlong Books: Table of Contents' },
                { link: 'https://cylis.lib.cycu.edu.tw/record%3Db3000729~S1%2Acht', display_text: 'Chung Yuan Christian University Library (associated eBook: 9781119320913)' },
              ],
            },
          },
          {
            type: 'book',
            title: 'Silberschatz\'s Operating System Concepts',
            medium: 'eBook',
            issued: { 'date-parts': [ [ 2019, 10 ] ] },
            ISBN: '9781119455868',
            'number-of-pages': 896,
            URL: 'https://www.wiley.com/en-gb/silberschatz%27s-operating-system-concepts-global-edition-10th-edition-p-9781119455868',
            accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
            custom: {
              edition: 'Global Edition',
              URL: [
                { link: 'https://www.vitalsource.com/products/silberschatz-39-s-operating-system-concepts-global-abraham-silberschatz-peter-b-v9781119455868', display_text: 'VitalSource' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
