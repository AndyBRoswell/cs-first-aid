import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'Color Matching and Color Discrimination',
    ],
    material: {
      type: 'chapter',
      title: 'Color Matching and Color Discrimination',
      author: [ { given: 'Vivianne C.', family: 'Smith' }, { given: 'Joel', family: 'Pokorny' } ],
      'container-title': 'The Science of Color',
      editor: [ { given: 'Steven K.', family: 'Shevell' } ],
      publisher: 'Elsevier',
      edition: 2,
      issued: { 'date-parts': [ [ 2003, 7, 11 ] ] },
      ISBN: '9780080523224',
      language: 'en-US',
      URL: 'https://sites.socsci.uci.edu/~kjameson/SmithPokorny2003.pdf',
      accessed: { 'date-parts': [ [ 2026, 8, 23 ] ] },
      custom: {
        Print: {
          type: 'book',
          ISBN: '9780444512512',
          issued: { 'date-parts': [ [ 2003 ] ] },
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
