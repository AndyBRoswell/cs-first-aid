import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'GICS' ],
    material: {
      type: 'standard',
      title: 'Global Industry Classification Standard',
      author: [ { literal: 'S&P Dow Jones Indices' }, { literal: 'MSCI' } ],
      'original-date': { 'date-parts': [ [ 1999 ] ] },
      language: 'en',
      URL: 'https://www.spglobal.com/spdji/en/landing/topic/gics/',
      accessed: { 'date-parts': [ [ 2026, 11, 24 ] ] },
      custom: {
        URL: [ { link: 'https://www.msci.com/indexes/index-resources/gics', display_text: 'MSCI' } ],
        free_material: [
          { link: 'https://www.spglobal.com/spdji/en/documents/index-policies/2025-gics-structure-english.xlsx', display_text: 'GICS structure (XLSX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
          { link: 'https://www.spglobal.com/spdji/en/documents/methodologies/methodology-gics.pdf', display_text: 'GICS methodology (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
