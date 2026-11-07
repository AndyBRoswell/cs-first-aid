import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'ISO/IEC/IEEE 29148:2018', 'ISO/IEC/IEEE 29148', 'IEEE 29148-2018' ],
    material: {
      type: 'standard',
      title: 'ISO/IEC/IEEE International Standard - Systems and software engineering -- Life cycle processes -- Requirements engineering',
      number: 'ISO/IEC/IEEE 29148:2018',
      edition: 2,
      author: [
        { literal: 'International Organization for Standardization' },
        { literal: 'International Electrotechnical Commission' },
        { literal: 'Institute of Electrical and Electronics Engineers' },
      ],
      publisher: 'IEEE',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2018, 11, 30 ] ] },
      'number-of-pages': 104,
      medium: 'PDF',
      ISBN: '9781504453028',
      DOI: '10.1109/IEEESTD.2018.8559686',
      language: 'en',
      URL: 'https://standards.ieee.org/ieee/29148/6937/',
      accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
      custom: {
        URL: [
          { link: 'https://ieeexplore.ieee.org/document/8559686', display_text: 'IEEE Xplore' },
          { link: 'https://www.iso.org/standard/72089.html', display_text: 'ISO' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
