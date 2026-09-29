import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Algorithms',
      author: [
        { given: 'Robert', family: 'Sedgewick' },
        { given: 'Kevin', family: 'Wayne' },
      ],
      edition: 4,
      medium: 'eBook',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2011, 2, 22 ] ] },
      ISBN: '9780132762588',
      language: 'en-US',
      URL: 'https://www.informit.com/store/algorithms-9780132762588',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        variant: [
          { type: 'book', medium: 'Hardcover', ISBN: '9780321573513', 'number-of-pages': 976, issued: { 'date-parts': [ [ 2011, 3, 24 ] ] }, URL: 'https://www.informit.com/store/algorithms-9780321573513' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
