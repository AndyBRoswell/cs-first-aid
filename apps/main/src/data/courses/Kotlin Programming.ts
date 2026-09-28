import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'Kotlin 程序设计',
  name: [ 'Kotlin 程序设计', 'Kotlin' ],
  material: {
    text: {
      en: [ catalog.get('Kotlin Docs') ],
    },
    reference: {
      en: [ catalog.get('Kotlin books') ],
    },
  },
} satisfies types_data.Course
