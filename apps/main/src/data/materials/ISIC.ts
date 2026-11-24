import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'ISIC', 'ISIC Rev. 5' ],
    material: {
      type: 'standard',
      title: 'International Standard Industrial Classification of All Economic Activities',
      author: [ { literal: 'United Nations Statistics Division' } ],
      publisher: 'United Nations',
      'publisher-place': 'New York',
      edition: '5',
      version: 'White-cover version',
      issued: { 'date-parts': [ [ 2026 ] ] },
      'number-of-pages': 335,
      language: 'en',
      URL: 'https://unstats.un.org/unsd/classifications/Econ/isic',
      accessed: { 'date-parts': [ [ 2026, 11, 24 ] ] },
      custom: {
        free_material: [
          { link: 'https://unstats.un.org/unsd/classifications/Econ/Download/ISIC_Rev5_Publication-white_cover_version.pdf', display_text: 'ISIC Rev. 5 manual (PDF)', 'Content-Type': 'application/pdf' }, // Edition, version, imprint and page count.
          { link: 'https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/ISIC_Rev_5_english_structure.csv', display_text: 'ISIC Rev. 5 structure (CSV)', 'Content-Type': 'text/csv' },
          { link: 'https://unstats.un.org/unsd/classifications/Econ/Download/ISIC5_Exp_Notes_19_Aug_2026.xlsx', display_text: 'ISIC Rev. 5 structure and explanatory notes (XLSX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
