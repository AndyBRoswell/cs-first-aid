import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Elias M.', family: 'Stein' }, { given: 'Rami', family: 'Shakarchi' } ],
      title: 'Complex Analysis',
      medium: 'Hardcover',
      publisher: 'Princeton University Press',
      'publisher-place': 'Princeton, NJ',
      'collection-title': 'Princeton Lectures in Analysis',
      'collection-number': 2,
      issued: { 'date-parts': [ [ 2003, 4, 27 ] ] },
      'number-of-pages': 400,
      ISBN: '978-0-691-11385-2',
      language: 'en-US',
      URL: 'https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis',
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
