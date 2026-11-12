import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      author: [ { literal: 'Microsoft' } ],
      title: 'C Language Reference',
      'container-title': 'Microsoft Learn',
      language: 'en-US',
      URL: 'https://learn.microsoft.com/en-us/cpp/c-language/c-language-reference',
      issued: { 'date-parts': [ [ 2021, 8, 3 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 12 ] ] },
      publisher: 'Microsoft',
      version: 'msvc-170',
    },
  },
] satisfies types_data.Entry[]
