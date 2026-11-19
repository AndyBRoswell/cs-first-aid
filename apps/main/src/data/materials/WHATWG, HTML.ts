import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'HTML Living Standard', 'HTML Standard', 'WHATWG HTML' ],
    material: {
      type: 'standard',
      title: 'HTML Living Standard',
      author: [ { literal: 'Web Hypertext Application Technology Working Group' } ],
      publisher: 'WHATWG',
      language: 'en-US',
      URL: 'https://html.spec.whatwg.org/multipage/',
      issued: { 'date-parts': [ [ 2026, 11, 17 ] ] },
      accessed: { 'date-parts': [ [ 2026, 11, 19 ] ] },
      custom: {
        license: 'CC-BY-4.0',
        free_material: [
          {
            link: 'https://html.spec.whatwg.org/',
            display_text: 'HTML (Single-Page Version)',
            'Content-Type': 'text/html',
            license: 'CC-BY-4.0',
            modified: { 'date-parts': [ [ 2026, 11, 17 ] ] },
            accessed: { 'date-parts': [ [ 2026, 11, 19 ] ] },
          },
          {
            link: 'https://html.spec.whatwg.org/print.pdf',
            display_text: 'PDF',
            'Content-Type': 'application/pdf',
            license: 'CC-BY-4.0',
            modified: { 'date-parts': [ [ 2026, 11, 17 ] ] },
            accessed: { 'date-parts': [ [ 2026, 11, 19 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
