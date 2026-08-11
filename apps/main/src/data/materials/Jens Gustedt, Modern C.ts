import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
    ],
    material: {
      type: 'book',
      title: 'Modern C',
      author: [ { given: 'Jens', family: 'Gustedt' } ],
      edition: 3,
      issued: { "date-parts": [ [ 2025, 8 ] ] },
      "available-date": { "date-parts": [ [ 2025, 9, 1 ] ] },
      "original-date": { 'date-parts': [ [ 2024, 10, 15 ] ] },
      publisher: 'Manning Publications',
      ISBN: '9781633437777' as CSL.ISBN,
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
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

catalog.add_items(items)