import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'C Primer Plus', ],
    material: {
      type: 'book',
      title: 'C Primer Plus',
      author: [ { given: 'Stephen', family: 'Prata' } ],
      edition: 6,
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2013, 11, 26 ] ] },
      ISBN: '9780321928429',
      language: 'en-US',
      URL: 'https://www.informit.com/store/c-primer-plus-9780321928429',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
