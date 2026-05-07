import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'J. A. Beachy and W. D. Blair, Abstract Algebra',
      'J. A. Beachy and W. D. Blair, Abstract Algebra, 2019',
      'J. A. Beachy and W. D. Blair, Abstract Algebra, 4e',
      { unordered_author: [ 'J. A. Beachy', 'W. D. Blair' ], title: 'Abstract Algebra', },
      { unordered_author: [ 'J. A. Beachy', 'W. D. Blair' ], title: 'Abstract Algebra', date: 2019, },
      { unordered_author: [ 'J. A. Beachy', 'W. D. Blair' ], title: 'Abstract Algebra', edition: 4, },
    ],
    material: {
      type: 'book',
      id: 'J. A. Beachy and W. D. Blair, Abstract Algebra, 4e',
      title: 'Abstract Algebra',
      author: [ { given: 'John A.', family: 'Beachy' }, { given: 'William D.', family: 'Blair' } ],
      edition: 4,
      publisher: 'Waveland Press, Inc.',
      'publisher-place': 'Long Grove, IL',
      issued: { 'date-parts': [ [ 2019 ], ], },
      language: 'en-US',
      'number-of-pages': 541,
      ISBN: '978-1-4786-3869-8' as CSL_Data.ISBN,
      URL: 'https://www.waveland.com/browse.php?t=477',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
      custom: {
        VitalSource: {
          type: 'book',
          id: '[eText] J. A. Beachy and W. D. Blair, Abstract Algebra, 4e',
          ISBN: '9781478638919' as CSL_Data.ISBN,
          URL: 'https://www.vitalsource.com/products/abstract-algebra-john-a-beachy-william-d-v9781478638919',
          accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
        } satisfies Data_Type.Material,
        Kindle: {
          type: 'book',
          id: '[Kindle] J. A. Beachy and W. D. Blair, Abstract Algebra, 4e',
          issued: { 'date-parts': [ [ 2019, 2, 15 ], ], },
          URL: 'https://www.amazon.com/Abstract-Algebra-John-Beachy-ebook/dp/B07NWXPC5D/',
          accessed: { 'date-parts': [ [ 2026, 5, 7 ], ], },
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)