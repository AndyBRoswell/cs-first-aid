import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'book',
      author: [ { family: 'Rosen', given: 'Kenneth H.' } ],
      title: 'Discrete Mathematics and Its Applications',
      edition: 9,
      issued: { 'date-parts': [ [ 2025 ] ] },
      publisher: 'McGraw-Hill Education',
      language: 'en-US',
      ISBN: '9781260289701',
      URL: 'https://www.mheducation.co.uk/discrete-mathematics-and-its-applications-2025-release-ise-9781266191541-emea-group',
      accessed: { 'date-parts': [ [ 2026, 5, 7 ] ] },
      custom: {
        edition: 'International Student Edition',
        variant: [
          {
            type: 'book',
            medium: 'Print',
            ISBN: '9781266191541',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
