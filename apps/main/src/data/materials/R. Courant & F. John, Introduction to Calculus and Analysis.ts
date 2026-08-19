import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
      'Introduction to Calculus and Analysis I',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Richard', family: 'Courant' }, { given: 'Fritz', family: 'John' } ],
      title: 'Introduction to Calculus and Analysis',
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
      ISBN: '978-3-540-65058-4' as CSL.ISBN,
      DOI: '10.1007/978-3-642-58604-0',
      URL: 'https://link.springer.com/book/10.1007/978-3-642-58604-0',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      language: 'en-US',
      custom: {
        'eBook Packages': 'Springer Book Archive',
        'eBook': {
          type: 'book',
          ISBN: '978-3-642-58604-0' as CSL.ISBN,
          issued: { "date-parts": [ [ 2012, 12, 6 ] ] },
        } satisfies types_data.Material
      } satisfies CSL.Custom,
    },
  },
  {
    id: [
      'Introduction to Calculus and Analysis II/1',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Richard', family: 'Courant' }, { given: 'Fritz', family: 'John' } ],
      title: 'Introduction to Calculus and Analysis',
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
      ISBN: '978-3-540-66569-4' as CSL.ISBN,
      DOI: '10.1007/978-3-642-57149-7',
      URL: 'https://link.springer.com/book/10.1007/978-3-642-57149-7',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      language: 'en-US',
      custom: {
        'eBook Packages': 'Springer Book Archive',
        'eBook': {
          type: 'book',
          ISBN: '978-3-642-57149-7' as CSL.ISBN,
          issued: { "date-parts": [ [ 2012, 12, 6 ] ] },
        } satisfies types_data.Material
      } satisfies CSL.Custom,
    },
  },
  {
    id: [
      'Introduction to Calculus and Analysis II/2',
    ],
    material: {
      type: 'book',
      author: [ { given: 'Richard', family: 'Courant' }, { given: 'Fritz', family: 'John' } ],
      title: 'Introduction to Calculus and Analysis',
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
      ISBN: '978-3-540-66570-0' as CSL.ISBN,
      URL: 'https://link.springer.com/book/9783540665700',
      accessed: { 'date-parts': [ [ 2026, 5, 5 ] ] },
      language: 'en-US',
      custom: {
        subtitle: 'Chapters 5 - 8',
        'eBook Packages': 'Springer Book Archive',
      } satisfies CSL.Custom
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(items)