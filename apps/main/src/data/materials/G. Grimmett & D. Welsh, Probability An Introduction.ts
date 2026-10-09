import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Probability: An Introduction',
      author: [ { given: 'Geoffrey', family: 'Grimmett' }, { given: 'Dominic', family: 'Welsh' } ],
      edition: 2,
      publisher: 'Oxford University Press',
      issued: { 'date-parts': [ [ 2014 ] ] },
      ISBN: '9780198709978',
      language: 'en',
      URL: 'https://global.oup.com/academic/product/probability-9780198709978',
      accessed: { 'date-parts': [ [ 2026, 10, 7 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
