import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'Introduction to Calculus and Analysis I',
      'Courant and John, Introduction to Calculus and Analysis I',
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis I' },
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis I', date: 1999, volume: 1, },
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis I', edition: 1, volume: 1, },
    ],
    material: {
      type: 'book',
      id: 'Courant and John, Introduction to Calculus and Analysis I',
      author: [ { given: 'Richard', family: 'Courant' }, { given: 'Fritz', family: 'John' } ],
      title: 'Introduction to Calculus and Analysis I',
      publisher: 'Springer',
      'publisher-place': 'Berlin, Heidelberg',
      'collection-title': 'Classics in Mathematics',
      volume: 1,
      "number-of-volumes": 2,
      "number-of-pages": 661,
      edition: 1,
      issued: { 'date-parts': [ [ 1998, 12, 3 ] ] },
      'original-date': { 'date-parts': [ [ 1965 ] ] },
      "original-publisher": 'Interscience Publishers, Inc.',
      ISBN: '978-3-540-65058-4',
      DOI: '10.1007/978-3-642-58604-0',
      URL: 'https://link.springer.com/book/10.1007/978-3-642-58604-0',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      language: 'en-US',
      custom: {
        'eBook Packages': 'Springer Book Archive',
        'eBook': {
          type: 'book',
          id: 'eBook Introduction to Calculus and Analysis I',
          ISBN: '978-3-642-58604-0',
          issued: { "date-parts": [ [ 2012, 12, 6 ] ] },
        } satisfies CSL_Data.Item
      } satisfies CSL_Data.Custom,
    },
  },
  {
    id: [
      'Introduction to Calculus and Analysis II/1',
      'Courant and John, Introduction to Calculus and Analysis II/1',
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis II/1' },
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis II/1', date: 2000, volume: 2, part: 1, },
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis II/1', edition: 1, volume: 2, part: 1, },
    ],
    material: {
      type: 'book',
      id: 'Courant and John, Introduction to Calculus and Analysis II/1',
      author: [ { given: 'Richard', family: 'Courant' }, { given: 'Fritz', family: 'John' } ],
      title: 'Introduction to Calculus and Analysis II/1',
      publisher: 'Springer',
      'publisher-place': 'Berlin, Heidelberg',
      'collection-title': 'Classics in Mathematics',
      volume: 2,
      "number-of-volumes": 2,
      part: 1,
      "number-of-pages": 556,
      edition: 1,
      issued: { 'date-parts': [ [ 1999, 12, 14 ] ] },
      'original-date': { 'date-parts': [ [ 1974 ] ] },
      "original-publisher": 'Interscience Publishers; a division of John Wiley and Sons, Inc.',
      ISBN: '978-3-540-66569-4',
      DOI: '10.1007/978-3-642-57149-7',
      URL: 'https://link.springer.com/book/10.1007/978-3-642-57149-7',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      language: 'en-US',
      custom: {
        'eBook Packages': 'Springer Book Archive',
        'eBook': {
          type: 'book',
          id: 'eBook Introduction to Calculus and Analysis II/1',
          ISBN: '978-3-642-57149-7',
          issued: { "date-parts": [ [ 2012, 12, 6 ] ] },
        } satisfies CSL_Data.Item
      } satisfies CSL_Data.Custom,
    },
  },
  {
    id: [
      'Introduction to Calculus and Analysis II/2',
      'Courant and John, Introduction to Calculus and Analysis II/2',
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis II/2' },
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis II/2', date: 2000, volume: 2, part: 2, },
      { unordered_author: [ 'Courant', 'John' ], title: 'Introduction to Calculus and Analysis II/2', edition: 1, volume: 2, part: 2, },
    ],
    material: {
      type: 'book',
      id: 'Courant and John, Introduction to Calculus and Analysis II/2',
      author: [ { given: 'Richard', family: 'Courant' }, { given: 'Fritz', family: 'John' } ],
      title: 'Introduction to Calculus and Analysis II/2',
      publisher: 'Springer',
      'publisher-place': 'Berlin, Heidelberg',
      'collection-title': 'Classics in Mathematics',
      volume: 2,
      "number-of-volumes": 2,
      part: 2,
      "number-of-pages": 412,
      edition: 1,
      issued: { 'date-parts': [ [ 1999, 12, 14 ] ] },
      'original-date': { 'date-parts': [ [ 1974 ] ] },
      "original-publisher": 'Interscience Publishers; a division of John Wiley and Sons, Inc.',
      ISBN: '978-3-540-66570-0',
      URL: 'https://link.springer.com/book/9783540665700',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      language: 'en-US',
      custom: {
        subtitle: 'Chapters 5 - 8',
        'eBook Packages': 'Springer Book Archive',
      } satisfies CSL_Data.Custom
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)