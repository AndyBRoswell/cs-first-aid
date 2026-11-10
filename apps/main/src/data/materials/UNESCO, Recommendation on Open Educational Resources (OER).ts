import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'UNESCO OER Recommendation 2019', 'OER Recommendation 2019', 'UNESCO 2019 OER', 'CL/4319', '40 C/32' ],
    material: {
      type: 'document',
      title: 'Recommendation on Open Educational Resources (OER)',
      author: [ { literal: 'UNESCO' } ],
      publisher: 'UNESCO',
      'publisher-place': 'Paris',
      number: 'CL/4319',
      issued: { 'date-parts': [ [ 2019, 11, 25 ] ] },
      language: 'en',
      URL: 'https://www.unesco.org/en/legal-affairs/recommendation-open-educational-resources-oer',
      accessed: { 'date-parts': [ [ 2026, 11, 10 ] ] },
      note: 'Adopted on 25 November 2019 by the UNESCO General Conference at its 40th session (40 C/Resolution 32); transmitted to Member States under Circular Letter CL/4319.',
      custom: {
        URL: [
          { link: 'https://unesdoc.unesco.org/ark:/48223/pf0000373755', display_text: 'UNESDOC (CL/4319)' },
          { link: 'https://unesdoc.unesco.org/ark:/48223/pf0000370936', display_text: 'UNESDOC (40 C/32)' },
        ],
        free_material: [
          {
            link: 'https://unesdoc.unesco.org/ark:/48223/pf0000373755/PDF/373755eng.pdf.multi',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
