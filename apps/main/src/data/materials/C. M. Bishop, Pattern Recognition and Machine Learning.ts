import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Pattern Recognition and Machine Learning',
      author: [ { family: 'Bishop', given: 'Christopher M.' } ],
      edition: 1,
      medium: 'Hardcover',
      publisher: 'Springer',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2006, 8, 17 ] ] },
      ISBN: '9780387310732',
      'number-of-pages': 'xx + 778',
      'collection-title': 'Information Science and Statistics',
      language: 'en',
      URL: 'https://link.springer.com/book/9780387310732',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        free_material: [ { link: 'https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf' } ],
        variant: [ { type: 'book', medium: 'Softcover', ISBN: '9781493938438', issued: { 'date-parts': [ [ 2016, 8, 23 ] ] } } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
