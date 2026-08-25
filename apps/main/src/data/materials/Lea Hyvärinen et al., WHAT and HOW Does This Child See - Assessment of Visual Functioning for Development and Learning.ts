import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'WHAT and HOW Does This Child See? Assessment of Visual Functioning for Development and Learning',
      author: [ { given: 'Lea', family: 'Hyvärinen' }, { given: 'Namita', family: 'Jacob' } ],
      issued: { 'date-parts': [ [ 2011 ] ] },
      accessed: { 'date-parts': [ [ 2026, 8, 20 ] ] },
      URL: 'http://www.lea-test.fi/en/vistests/instruct/contrast/lowsymbo/Snellen.pdf',
      ISBN: '9789529283804',
      language: 'en-US',
      "number-of-pages": 238,
    },
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]
