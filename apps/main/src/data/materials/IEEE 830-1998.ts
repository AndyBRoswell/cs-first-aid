import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'IEEE 830-1998', 'IEEE Std 830-1998', 'IEEE 830' ],
    material: {
      type: 'standard',
      title: 'IEEE Recommended Practice for Software Requirements Specifications',
      number: 'IEEE Std 830-1998',
      author: [ { literal: 'Institute of Electrical and Electronics Engineers' } ],
      publisher: 'IEEE',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 1998, 10, 20 ] ] },
      'number-of-pages': 40,
      medium: 'PDF',
      ISBN: '9780738104485',
      DOI: '10.1109/IEEESTD.1998.88286',
      language: 'en',
      URL: 'https://standards.ieee.org/ieee/830/1222/',
      accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
      note: 'Reaffirmed on 2009-12-09; superseded by ISO/IEC/IEEE 29148:2011.',
      custom: {
        URL: [
          { link: 'https://ieeexplore.ieee.org/document/720574', display_text: 'IEEE Xplore' },
        ],
        free_material: [
          {
            link: 'https://www.ecs.csun.edu/~rlingard/comp490/IEEEStd830-1998.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
