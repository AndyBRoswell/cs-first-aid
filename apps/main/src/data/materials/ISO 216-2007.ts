import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const standards = [
  {
    id: [ 'ISO 216:2007', 'ISO 216' ],
    material: {
      type: 'standard',
      title: 'Writing paper and certain classes of printed matter — Trimmed sizes — A and B series, and indication of machine direction',
      author: [ { literal: 'International Organization for Standardization' } ],
      publisher: 'International Organization for Standardization',
      'publisher-place': 'Geneva',
      number: 'ISO 216:2007',
      issued: { 'date-parts': [ [ 2007, 9 ] ] },
      accessed: { 'date-parts': [ [ 2026, 8, 22 ] ] },
      language: 'en-US',
      URL: 'https://www.iso.org/standard/36631.html',
      custom: {
        free_material: {
          Preview: [
            {
              link: 'https://preview.sist.si/sist-preview/36631/c0883203ea25445c9992bb09343620c5/ISO-216-2007.pdf',
              'Content-Type': 'application/pdf',
            },
          ],
        },
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

export { standards as entries }