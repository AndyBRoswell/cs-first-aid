import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'Princeton Calculus Reader',
      'The Calculus Lifesaver',
      'Banner, The Calculus Lifesaver',
      { unordered_author: 'Banner', title: 'The Calculus Lifesaver', },
    ],
    material: {
      type: 'book',
      id: 'Princeton Calculus Reader',
      author: [ { given: 'Adrian D.', family: 'Banner' }, ],
      title: 'The Calculus Lifesaver: All the Tools You Need to Excel at Calculus',
      edition: 1,
      publisher: 'Princeton University Press',
      "publisher-place": 'Princeton, NJ',
      issued: { "date-parts": [ [ 2009, 11, 28 ], ], },
      "number-of-pages": 752,
      ISBN: '9781400835782',
      URL: 'https://press.princeton.edu/books/ebook/9781400835782/the-calculus-lifesaver-pdf?srsltid=AfmBOops83rJhcGuw-fa0Bu44xMu49g0lGUuYIANhrxpdDl-qjG2pwW-',
      accessed: { "date-parts": [ [ 2026, 4, 3 ], ], },
    }
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)