import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'Kotlin books' ],
    material: {
      type: 'webpage',
      title: 'Kotlin books',
      author: [ { literal: 'JetBrains' } ],
      'container-title': 'Kotlin Documentation',
      language: 'en-US',
      URL: 'https://kotlinlang.org/docs/books.html',
      issued: { 'date-parts': [ [ 2025, 10, 14 ] ] },
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
