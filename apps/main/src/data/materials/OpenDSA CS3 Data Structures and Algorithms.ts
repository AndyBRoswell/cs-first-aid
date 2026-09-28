import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'CS3 Data Structures & Algorithms',
      author: [ { literal: 'OpenDSA Project Contributors' } ],
      'container-title': 'OpenDSA',
      language: 'en-US',
      URL: 'https://opendsa-server.cs.vt.edu/OpenDSA/Books/CS3/html/',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
