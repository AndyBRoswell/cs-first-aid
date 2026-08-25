import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Lecture 7: Color',
      number: 7,
      author: [ { given: 'William T.', family: 'Freeman' }, { given: 'Trevor', family: 'Darrell' } ],
      'collection-title': '6.801/6.866: Machine Vision',
      publisher: 'Massachusetts Institute of Technology',
      'publisher-place': 'Cambridge, MA',
      issued: { 'date-parts': [ [ 2002, 9, 26 ] ] },
      language: 'en-US',
      URL: 'http://www.ai.mit.edu/courses/6.801/Fall2002/lect/lect07.pdf',
      accessed: { 'date-parts': [ [ 2026, 8, 23 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]