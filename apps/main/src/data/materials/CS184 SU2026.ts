import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import { type Item as CSL_Item } from '@cs-first-aid/bibkit/CSL'
import * as util from '@cs-first-aid/util'
import * as _ from '@cs-first-aid/util/lib/lodash-es'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Lecture 11: Measuring Light: Radiometry and Photometry',
      number: 11,
      author: [ { given: 'Ren', family: 'Ng' }, { given: 'David', family: 'McAllister' }, ],
      'collection-title': 'CS 184/284A: Foundations of Computer Graphics',
      publisher: 'University of California, Berkeley',
      'publisher-place': 'Berkeley, CA',
      issued: { 'date-parts': [ [ 2026, 7, 9 ] ], season: 2, },
      language: 'en-US',
      URL: 'https://cs184.eecs.berkeley.edu/su26/assets/lectures/11-radiometry-su26.pdf',
      accessed: { 'date-parts': [ [ 2026, 9, 9 ] ], },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Discussion 06 Radiometry & Photometry',
      number: 7,
      author: [ { given: 'Ren', family: 'Ng' }, { given: 'David', family: 'McAllister' }, ],
      'collection-title': 'CS 184/284A: Foundations of Computer Graphics',
      publisher: 'University of California, Berkeley',
      'publisher-place': 'Berkeley, CA',
      issued: { 'date-parts': [ [ 2026, 7 ] ], season: 2, },
      language: 'en-US',
      URL: 'https://cs184.eecs.berkeley.edu/su26/assets/discussions/07-slides.pdf',
      accessed: { 'date-parts': [ [ 2026, 9, 9 ] ], },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]