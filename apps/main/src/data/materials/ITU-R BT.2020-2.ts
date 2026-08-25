import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'ITU-R BT.2020-2', 'ITU-R BT.2020', 'Rec. 2020', 'BT.2020' ],
    material: {
      type: 'standard',
      title: 'Parameter values for ultra-high definition television systems for production and international programme exchange',
      number: 'ITU-R BT.2020-2',
      author: [ { literal: 'International Telecommunication Union' } ],
      issued: { 'date-parts': [ [ 2015, 10 ] ] },
      publisher: 'International Telecommunication Union',
      'publisher-place': 'Geneva',
      language: 'en-US',
      URL: 'https://www.itu.int/rec/R-REC-BT.2020',
      accessed: { 'date-parts': [ [ 2026, 8, 22 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.2020-2-201510-I!!PDF-E.pdf',
            display_text: 'PDF (English)',
            'Content-Type': 'application/pdf',
          } satisfies types_data.Link,
        ],
      } satisfies CSL.Custom,
    } satisfies CSL.Item,
  },
] satisfies types_data.Entry[]