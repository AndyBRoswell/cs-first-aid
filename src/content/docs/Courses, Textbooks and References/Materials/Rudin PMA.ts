import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      'Rudin PMA',
      'Baby Rudin',
      { unordered_author: 'Rudin', title: 'PMA', },
      { unordered_author: 'Rudin', title: 'PMA', edition: 3, },
      { unordered_author: 'Rudin', title: 'PMA', date: 1976, },
    ],
    material: {
      type: 'book',
      id: 'Rudin PMA',
      title: 'Principles of Mathematical Analysis',
      "title-short": 'PMA',
      author: [ { given: 'Walter', family: 'Rudin' } ],
      publisher: 'McGraw-Hill Education',
      issued: { 'date-parts': [ [ 1976 ] ] },
      edition: 3,
      ISBN: '9780070542358',
      language: 'en-US',
      URL: 'https://www.goodreads.com/en/book/show/292079.Principles_of_Mathematical_Analysis',
      note: 'ISBN10: 007054234X/007054235X/0070856133',
    }
  },
] satisfies catalog.pair[]

for (const item of items) { catalog.add(item.id, item.material)}