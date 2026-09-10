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
      DOI: '10.1016/B978-044451251-2/50004-0',
      language: 'en-US',
      URL: 'https://www.sciencedirect.com/science/article/pii/B9780444512512500040',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://sites.socsci.uci.edu/~kjameson/SmithPokorny2003.pdf',
            display_text: '3 Color Matching and Color Discrimination',
            'Content-Type': 'application/pdf',
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '9780444512512',
            issued: { 'date-parts': [ [ 2003 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
