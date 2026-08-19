import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Abstract Algebra',
      author: [ { given: 'John A.', family: 'Beachy' }, { given: 'William D.', family: 'Blair' } ],
      edition: 4,
      publisher: 'Waveland Press, Inc.',
      'publisher-place': 'Long Grove, IL',
      issued: { 'date-parts': [ [ 2019 ], ], },
      language: 'en-US',
      'number-of-pages': 541,
      ISBN: '978-1-4786-3869-8' as CSL.ISBN,
      URL: 'https://www.waveland.com/browse.php?t=477',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
      custom: {
        VitalSource: {
          type: 'book',
          ISBN: '9781478638919' as CSL.ISBN,
          URL: 'https://www.vitalsource.com/products/abstract-algebra-john-a-beachy-william-d-v9781478638919',
          accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
        } satisfies types_data.Material,
        Kindle: {
          type: 'book',
          issued: { 'date-parts': [ [ 2019, 2, 15 ], ], },
          URL: 'https://www.amazon.com/Abstract-Algebra-John-Beachy-ebook/dp/B07NWXPC5D/',
          accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)