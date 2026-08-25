import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'SMPTE ST 419:2005', 'ST 419' ],
    material: {
      type: 'standard',
      title: 'Motion-Picture Film (70-mm) - Projectable Image Area, 15/70 Format',
      author: [ { literal: 'Society of Motion Picture and Television Engineers' } ],
      publisher: 'Society of Motion Picture and Television Engineers',
      language: 'en-US',
      DOI: '10.5594/SMPTE.ST419.2005',
      URL: 'https://pub.smpte.org/doc/st419/20051018-pub/',
      issued: { 'date-parts': [ [ 2005, 10, 18 ] ] },
      accessed: { 'date-parts': [ [ 2026, 8, 22 ] ] },
    } satisfies CSL.Item,
  },
] satisfies types_data.Entry[]