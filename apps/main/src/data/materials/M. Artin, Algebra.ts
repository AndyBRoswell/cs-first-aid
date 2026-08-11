import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { given: 'Michael', family: 'Artin' } ],
      title: 'Algebra',
      publisher: 'Pearson',
      edition: 2,
      language: 'en-US',
      issued: { "date-parts": [ [ 2014, 1, 14 ] ] },
      "original-date": { "date-parts": [ [ 2010, 8, 13 ] ] },
      "original-publisher": "Pearson",
      ISBN: '978-0321998026' as CSL.ISBN,
      URL: 'https://www.amazon.com/Algebra-Michael-Artin-ebook/dp/B00HR7MSZO',
      accessed: { "date-parts": [ [ 2026, 5, 6 ] ] },
      note: 'Kindle Edition',
      custom: {
        Print: {
          type: 'book',
          ISBN: '9780134689609' as CSL.ISBN,
          issued: { "date-parts": [ [ 2017, 2, 13 ] ] },
          "original-date": { "date-parts": [ [ 2010, 8, 13 ] ] },
          "original-publisher": "Pearson",
          URL: 'https://www.pearson.com/en-us/subject-catalog/p/algebra-classic-version/P200000006078/9780134689609',
          accessed: { "date-parts": [ [ 2026, 5, 6 ] ] },
        } satisfies types_data.Material,
      }
    },
  }
] satisfies types_data.Entry[]

catalog.add_items(items)