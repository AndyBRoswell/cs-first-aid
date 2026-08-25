import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const standards = [
  {
    id: [ 'ITU-R BT.709-6', 'BT.709-6', 'Rec. 709', ],
    material: {
      type: 'standard',
      title: 'Parameter values for the HDTV standards for production and international programme exchange',
      number: 'ITU-R BT.709-6',
      author: [ { literal: 'International Telecommunication Union' }, ],
      publisher: 'International Telecommunication Union',
      'publisher-place': 'Geneva',
      issued: { 'date-parts': [ [ 2015, 6 ], ], },
      accessed: { 'date-parts': [ [ 2026, 8, 22 ], ], },
      language: 'en-US',
      URL: 'https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.709-6-201506-I!!PDF-E.pdf',
    } satisfies CSL.Item,
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]

export { standards as entries }