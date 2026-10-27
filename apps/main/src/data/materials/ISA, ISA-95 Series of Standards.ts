import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'ISA-95 Standard: Enterprise-Control System Integration',
      author: [ { literal: 'International Society of Automation' } ],
      language: 'en',
      URL: 'https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
