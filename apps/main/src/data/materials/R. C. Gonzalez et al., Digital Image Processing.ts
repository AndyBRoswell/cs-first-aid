import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const books = [
  {
    id: [
      'DIP/4e',
      'DIP-4E',
      'DIP4E',
    ],
    material: {
      type: 'book',
      title: 'Digital Image Processing, Global Edition',
      author: [ { given: 'Rafael C.', family: 'Gonzalez' }, { given: 'Richard E.', family: 'Woods' } ],
      edition: 4,
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2017, 10, 26 ] ] },
      ISBN: '9781292223049' as CSL.ISBN,
      language: 'en-GB',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/digital-image-processing-global-edition/P200000004313/9781292223049',
      accessed: { 'date-parts': [ [ 2026, 8, 23 ] ] },
      custom: {
        eTextbook: {
          type: 'book',
          ISBN: '9781292223070' as CSL.ISBN,
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

export { books as entries }