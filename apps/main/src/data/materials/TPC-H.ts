import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'TPC-H' ],
    material: {
      type: 'standard',
      title: 'TPC Benchmark H (Decision Support): Standard Specification',
      number: 'TPC-H',
      author: [ { literal: 'Transaction Processing Performance Council' } ],
      publisher: 'Transaction Processing Performance Council',
      'publisher-place': 'San Francisco',
      version: '3.0.1',
      'number-of-pages': 138,
      language: 'en',
      URL: 'https://www.tpc.org/tpch/',
      accessed: { 'date-parts': [ [ 2026, 11, 2 ] ] },
      custom: {
        URL: [
          { link: 'https://www.tpc.org/tpc_documents_current_versions/current_specifications5.asp', display_text: 'Current specification and data-generation tools' },
          { link: 'https://www.tpc.org/TPC_Documents_Current_Versions/download_programs/tools-download-request5.asp?bm_type=TPC-H&bm_vers=3.0.1&mode=CURRENT-ONLY', display_text: 'Official tools request form (contact details and license acceptance required)' },
        ],
        free_material: [
          { link: 'https://www.tpc.org/TPC_Documents_Current_Versions/pdf/TPC-H_v3.0.1.pdf', display_text: 'Specification, schemas and query definitions (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
