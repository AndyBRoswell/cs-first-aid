import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'PBRT',
      'PBRT4',
      'Physically Based Rendering',
    ],
    material: {
      type: 'book',
      title: 'Physically Based Rendering: From Theory to Implementation',
      author: [ { given: 'Matt', family: 'Pharr' }, { given: 'Wenzel', family: 'Jakob' }, { given: 'Greg', family: 'Humphreys' } ],
      edition: 4,
      publisher: 'The MIT Press',
      'publisher-place': 'Cambridge, MA',
      issued: { 'date-parts': [ [ 2023, 3, 28 ], ], },
      ISBN: '9780262048026',
      language: 'en-US',
      URL: 'https://pbr-book.org/4ed/',
      accessed: { 'date-parts': [ [ 2026, 8, 31 ], ], },
      custom: {
        free_material: [
          {
            link: 'https://github.com/mmp/pbrt-v4',
            display_text: 'Source Code (pbrt-v4)',
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9780262374040',
            issued: { 'date-parts': [ [ 2023, 3, 28 ], ], },
          },
          {
            type: 'book',
            medium: 'ePub',
            ISBN: '9780262374033',
            issued: { 'date-parts': [ [ 2023, 3, 28 ], ], },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]