import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'Mastering CMake' ],
    material: {
      type: 'book',
      title: 'Mastering CMake: A Cross-Platform Build System',
      'original-author': [
        { given: 'Ken', family: 'Martin' },
        { given: 'Bill', family: 'Hoffman' },
      ],
      publisher: 'Kitware',
      language: 'en-US',
      URL: 'https://cmake.org/cmake/help/book/mastering-cmake/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
    },
  },
] satisfies types_data.Entry[]
