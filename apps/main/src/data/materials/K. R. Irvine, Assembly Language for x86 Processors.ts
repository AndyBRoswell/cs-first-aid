import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Assembly Language for x86 Processors',
      author: [ { given: 'Kip R.', family: 'Irvine' } ],
      edition: 8,
      publisher: 'Pearson',
      'publisher-place': 'Hoboken, NJ',
      issued: { 'date-parts': [ [ 2019, 7, 29 ] ] },
      ISBN: '9780135381694',
      language: 'en-US',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/assembly-language-for-x86-processors/P200000003474',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
