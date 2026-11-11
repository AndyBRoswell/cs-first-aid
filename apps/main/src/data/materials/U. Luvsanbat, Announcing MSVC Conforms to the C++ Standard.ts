import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'post-weblog',
      title: 'Announcing: MSVC Conforms to the C++ Standard',
      author: [ { given: 'Ulzii', family: 'Luvsanbat' } ],
      'container-title': 'C++ Team Blog',
      publisher: 'Microsoft',
      issued: { 'date-parts': [ [ 2018, 5, 7 ] ] },
      language: 'en',
      URL: 'https://devblogs.microsoft.com/cppblog/announcing-msvc-conforms-to-the-c-standard/',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
