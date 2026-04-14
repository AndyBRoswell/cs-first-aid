import * as catalog from './catalog.ts'

const items = [
  {
    id: [
      'Understanding Analysis',
      'Abbott, Understanding Analysis',
      'Abbott, Understanding Analysis, 2e',
      'Abbott, Understanding Analysis, 2015',
      { unordered_author: 'Abbott', title: 'Understanding Analysis', },
      { unordered_author: 'Abbott', title: 'Understanding Analysis', edition: 2, },
      { unordered_author: 'Abbott', title: 'Understanding Analysis', date: 2015, },
    ],
    material: {
      type: 'book',
      id: 'Abbott, Understanding Analysis',
      author: [ { given: 'Stephen', family: 'Abbott' } ],
      title: 'Understanding Analysis',
      edition: 2,
      publisher: 'Springer',
      "publisher-place": 'New York, NY',
      issued: { "date-parts": [ [ 2015, ], ], },
      "number-of-pages": 312,
      ISBN: '978-1-4939-2712-8',
      "collection-title": 'Undergraduate Texts in Mathematics',
      "collection-editor": [ { given: 'Sheldon Jay', family: 'Axler' }, { given: 'Kenneth Alan', family: 'Ribet' }, ],
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-4939-2712-8',
      accessed: { "date-parts": [ [ 2026, 4, 10 ], ], },
    }
  }
] satisfies catalog.pair[]

for (const item of items) {
  catalog.add(item.id, item.material)
}