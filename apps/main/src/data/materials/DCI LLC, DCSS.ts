import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const docs = [
  {
    id: [ 'DCSS', 'DCI Spec' ],
    material: {
      type: 'report',
      title: 'Digital Cinema System Specification',
      author: [ { literal: 'Digital Cinema Initiatives, LLC' } ],
      language: 'en-US',
      URL: 'https://documents.dcimovies.com/DCSS/draft/latest/Digital-Cinema-System-Specification.pdf',
      accessed: [ [ 2026, 8, 22 ] ],
    } as CSL.Item,
  } satisfies types_data.Entry,
] satisfies types_data.Entry[]

catalog.add_items(docs)