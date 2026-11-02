import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'TPC-DS' ],
    material: {
      type: 'standard',
      title: 'TPC Benchmark DS: Standard Specification',
      number: 'TPC-DS',
      author: [ { literal: 'Transaction Processing Performance Council' } ],
      publisher: 'Transaction Processing Performance Council',
      version: '4.0.0',
      issued: { 'date-parts': [ [ 2024, 11, 21 ] ] },
      'number-of-pages': 146,
      language: 'en',
      URL: 'https://www.tpc.org/tpcds/',
      accessed: { 'date-parts': [ [ 2026, 11, 2 ] ] },
      custom: {
        URL: [
          { link: 'https://www.tpc.org/tpc_documents_current_versions/current_specifications5.asp', display_text: 'Current specification and data-generation tools' },
          { link: 'https://www.tpc.org/TPC_Documents_Current_Versions/download_programs/tools-download-request5.asp?bm_type=TPC-DS&bm_vers=4.0.0&mode=CURRENT-ONLY', display_text: 'Official tools request form (contact details and license acceptance required)' },
        ],
        free_material: [
          { link: 'https://www.tpc.org/TPC_Documents_Current_Versions/pdf/TPC-DS_v4.0.0.pdf', display_text: 'Specification, schemas and query definitions (PDF)', 'Content-Type': 'application/pdf' }, // issued, version
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
