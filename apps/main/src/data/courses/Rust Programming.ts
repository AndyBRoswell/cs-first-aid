import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/materials/import materials.ts'

export const info = {
  canonical_name: 'Rust 程序设计',
  name: [ 'Rust 程序设计', 'Rust程序设计', 'Rust' ],
  tag: [ '基础选修' ],
  material: {
    text: {
      en: [ catalog.get('The Rust Programming Language') ],
    },
    guide: {
      en: [ catalog.get('Rust by Example') ],
    },
    exercise: {
      en: [ catalog.get('Rustlings') ],
    },
    reference: {
      en: [
        catalog.get('The Rust Reference'),
        catalog.get('The Rust Standard Library'),
        catalog.get('The Cargo Book'),
        catalog.get('The Rustonomicon'),
        catalog.get('The Embedded Rust Book'),
      ],
    },
  },
} satisfies types_data.Course
