import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'M. Artin, Algebra',
      'M. Artin, Algebra, 2e',
      { unordered_author: 'M. Artin', title: 'Algebra', edition: 2, },
    ],
    material: {
      type: 'book',
      id: '',
      author: [ { given: 'Michael', family: 'Artin' } ],
      title: 'Algebra',
      publisher: 'Pearson',
      edition: 2,
      language: 'en-US',
      issued: { "date-parts": [ [ 2014, 1, 14 ] ] },
      "original-date": { "date-parts": [ [ 2010, 8, 13 ] ] },
      "original-publisher": "Pearson",
      ISBN: '978-0321998026' as CSL_Data.ISBN,
      URL: 'https://www.amazon.com/Algebra-Michael-Artin-ebook/dp/B00HR7MSZO',
      accessed: { "date-parts": [ [ 2026, 5, 6 ] ] },
      note: 'Kindle Edition',
      custom: {
        Print: {
          type: 'book',
          id: '[Print] M. Artin, Algebra, 2e',
          ISBN: '9780134689609' as CSL_Data.ISBN,
          issued: { "date-parts": [ [ 2017, 2, 13 ] ] },
          "original-date": { "date-parts": [ [ 2010, 8, 13 ] ] },
          "original-publisher": "Pearson",
          URL: 'https://www.pearson.com/en-us/subject-catalog/p/algebra-classic-version/P200000006078/9780134689609',
          accessed: { "date-parts": [ [ 2026, 5, 6 ] ] },
        } satisfies Data_Type.Material,
      }
    },
  }
] satisfies Data_Type.Entry[]

catalog.add_items(items)