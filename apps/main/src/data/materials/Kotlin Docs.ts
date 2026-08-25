import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const docs = [
  {
    id: [ 'Kotlin Docs', 'Kotlin Documentation', 'Kotlin Reference' ],
    material: {
      type: 'webpage',
      title: 'Kotlin Documentation',
      author: [ { literal: 'JetBrains' } ],
      language: 'en-US',
      URL: 'https://kotlinlang.org/docs/home.html',
      issued: { 'date-parts': [ [ 2026, 8, 13 ] ] },
      accessed: { 'date-parts': [ [ 2026, 8, 14 ] ] },
      custom: {
        GitHub: {
          type: 'webpage',
          URL: 'https://github.com/JetBrains/kotlin/tree/master/docs',
          issued: { 'date-parts': [ [ 2026, 8, 13 ] ] },
          accessed: { 'date-parts': [ [ 2026, 8, 14 ] ] },
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

export { docs as entries }