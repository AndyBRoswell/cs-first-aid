import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
      'Understanding Analysis',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Stephen', family: 'Abbott' } ],
      title: 'Understanding Analysis',
      edition: 2,
      publisher: 'Springer',
      "publisher-place": 'New York, NY',
      issued: { "date-parts": [ [ 2015, ], ], },
      "number-of-pages": 312,
      ISBN: '978-1-4939-2712-8' as CSL.ISBN,
      "collection-title": 'Undergraduate Texts in Mathematics',
      "collection-editor": [ { given: 'Sheldon Jay', family: 'Axler' }, { given: 'Kenneth Alan', family: 'Ribet' }, ],
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-4939-2712-8',
      accessed: { "date-parts": [ [ 2026, 4, 10 ], ], },
      custom: {
        "collection-title-short": 'UTM',
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)