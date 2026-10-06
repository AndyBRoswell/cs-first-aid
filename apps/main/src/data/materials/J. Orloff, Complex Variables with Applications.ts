import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      author: [ { given: 'Jeremy', family: 'Orloff' } ],
      title: 'Complex Variables with Applications: Lecture Notes',
      medium: 'Chapter PDFs',
      publisher: 'Massachusetts Institute of Technology',
      'publisher-place': 'Cambridge, MA',
      issued: { 'date-parts': [ [ 2018 ] ] },
      language: 'en-US',
      URL: 'https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/pages/lecture-notes/',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
