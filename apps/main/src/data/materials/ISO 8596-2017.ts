import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'ISO 8596:2017' ],
    material: {
      type: 'standard',
      title: 'Ophthalmic optics — Visual acuity testing — Standard and clinical optotypes and their presentation',
      number: 'ISO 8596:2017',
      author: [ { literal: 'International Organization for Standardization' } ],
      issued: { 'date-parts': [ [ 2017, 11 ] ] },
      publisher: 'International Organization for Standardization',
      language: 'en-US',
      URL: 'https://www.iso.org/standard/69042.html',
      accessed: { 'date-parts': [ [ 2026, 9, 10 ] ] },
      custom: {
        free_material: {
          Preview: [
            {
              link: 'https://cdn.standards.iteh.ai/samples/69042/42ad78d4a3a34245a4d5b91f3a14a3e9/ISO-8596-2017.pdf',
              'Content-Type': 'application/pdf',
            },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies CSL.Item,
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]
