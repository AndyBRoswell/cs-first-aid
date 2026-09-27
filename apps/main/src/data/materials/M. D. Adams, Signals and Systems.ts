import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Signals and Systems',
      author: [ { given: 'Michael D.', family: 'Adams' } ],
      edition: '6.0',
      issued: { 'date-parts': [ [ 2024, 12, 15 ] ] },
      publisher: 'Michael Adams',
      ISBN: '978-1-990707-07-0',
      language: 'en-US',
      URL: 'https://www.ece.uvic.ca/~frodo/sigsysbook/',
      accessed: { 'date-parts': [ [ 2026, 9, 27 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.ece.uvic.ca/~frodo/sigsysbook/downloads/signals_and_systems-6.0.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
            license: 'CC-BY-NC-ND-3.0',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
