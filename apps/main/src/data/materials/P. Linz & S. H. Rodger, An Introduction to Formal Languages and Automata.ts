import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'An Introduction to Formal Languages and Automata',
      author: [ { given: 'Peter', family: 'Linz' }, { given: 'Susan H.', family: 'Rodger' } ],
      edition: 7,
      medium: 'Paperback',
      publisher: 'Jones & Bartlett Learning',
      'publisher-place': 'Burlington, Massachusetts',
      issued: { 'date-parts': [ [ 2023 ] ] },
      ISBN: '9781284231601',
      'number-of-pages': 572,
      language: 'en',
      URL: 'https://www.jblearning.com/catalog/productdetails/9781284231601',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
