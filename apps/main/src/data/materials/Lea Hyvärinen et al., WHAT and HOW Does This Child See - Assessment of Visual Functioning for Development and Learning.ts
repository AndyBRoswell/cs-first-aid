import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const books_lea = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'WHAT and HOW Does This Child See? Assessment of Visual Functioning for Development and Learning',
      author: [ { given: 'Lea', family: 'Hyvärinen' }, { given: 'Namita', family: 'Jacob' } ],
      issued: { 'date-parts': [ [ 2011 ] ] },
      accessed: { 'date-parts': [ [ 2026, 8, 20 ] ] },
      URL: 'http://www.lea-test.fi/en/vistests/instruct/contrast/lowsymbo/Snellen.pdf',
      ISBN: '9789529283804' as CSL.ISBN,
      language: 'en-US',
      "number-of-pages": 238,
    },
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]

catalog.add_items(books_lea)