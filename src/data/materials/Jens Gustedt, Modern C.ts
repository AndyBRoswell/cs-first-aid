import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'J. Gustedt, "Modern C," 3rd ed.',
      { unordered_author: 'J. Gustedt', title: 'Modern C', },
      { unordered_author: 'J. Gustedt', title: 'Modern C', edition: 3, },
    ],
    material: {
      type: 'book',
      id: 'J. Gustedt, "Modern C," 3rd ed.',
      title: 'Modern C',
      author: [ { given: 'Jens', family: 'Gustedt' } ],
      edition: 3,
      issued: { "date-parts": [ [ 2025, 8 ] ] },
      "available-date": { "date-parts": [ [ 2025, 9, 1 ] ] },
      "original-date": { 'date-parts': [ [ 2024, 10, 15 ] ] },
      publisher: 'Manning Publications',
      ISBN: '9781633437777' as CSL_Data.ISBN,
      language: 'en-US',
      URL: 'https://gustedt.gitlabpages.inria.fr/modern-c/',
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://hal.inria.fr/hal-02383654',
            license: 'CC BY-NC-ND 4.0',
            display_text: 'Free version (HAL/INRIA)',
            note: 'Most recent version: Oct. 15, 2024',
          },
          {
            link: 'https://hal.inria.fr/hal-03345464',
            license: 'MIT',
            display_text: 'Code examples (HAL/INRIA)',
          },
        ],
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)