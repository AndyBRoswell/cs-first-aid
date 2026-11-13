import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'CppCoreGuidelines', ],
    material: {
      type: 'webpage',
      title: 'C++ Core Guidelines',
      editor: [
        { given: 'Bjarne', family: 'Stroustrup', },
        { given: 'Herb', family: 'Sutter', },
      ],
      language: 'en',
      URL: 'https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines',
      issued: { 'date-parts': [ [ 2026, 6, 14, ], ], },
      accessed: { 'date-parts': [ [ 2026, 11, 13, ], ], },
    },
  },
] satisfies types_data.Entry[]
