import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
      'Princeton Calculus Reader',
      'The Calculus Lifesaver',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Adrian D.', family: 'Banner' }, ],
      title: 'The Calculus Lifesaver: All the Tools You Need to Excel at Calculus',
      edition: 1,
      publisher: 'Princeton University Press',
      "publisher-place": 'Princeton, NJ',
      issued: { "date-parts": [ [ 2009, 11, 28 ], ], },
      "number-of-pages": 752,
      ISBN: '9781400835782' as CSL.ISBN,
      URL: 'https://press.princeton.edu/books/ebook/9781400835782/the-calculus-lifesaver-pdf?srsltid=AfmBOops83rJhcGuw-fa0Bu44xMu49g0lGUuYIANhrxpdDl-qjG2pwW-',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    }
  },
] satisfies types_data.Entry[]

catalog.add_items(items)