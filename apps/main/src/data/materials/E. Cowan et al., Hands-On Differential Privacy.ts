import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Hands-On Differential Privacy',
      author: [ { given: 'Ethan', family: 'Cowan' }, { given: 'Michael', family: 'Shoemate' }, { given: 'Mayana', family: 'Pereira' } ],
      medium: 'eBook',
      publisher: "O'Reilly Media, Inc.",
      issued: { 'date-parts': [ [ 2024, 5 ] ] },
      ISBN: '9781492097730',
      'number-of-pages': 362,
      language: 'en',
      URL: 'https://www.oreilly.com/library/view/hands-on-differential-privacy/9781492097730/',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        free_material: [
          { link: 'https://github.com/Hands-on-Differential-Privacy-Book/hands-on-differential-privacy', display_text: 'Code, data, and solutions (GitHub)' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
