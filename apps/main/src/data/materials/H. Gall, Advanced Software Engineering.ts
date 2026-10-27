import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Advanced Software Engineering',
      author: [ { given: 'Harald', family: 'Gall' } ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'University of Zurich',
      issued: { 'date-parts': [ [ 2012 ] ] },
      version: 'Spring 2012',
      language: 'en',
      note: 'Software architecture section of the course: principles and styles, architecture patterns, Architecture Tradeoff Analysis Method (ATAM), and architecture description languages / ACME.',
      URL: 'https://www.ifi.uzh.ch/en/seal/teaching/courses/archive/hs10-1/ase.html',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        free_material: [
          { link: 'https://www.ifi.uzh.ch/dam/jcr:ffffffff-fd5f-cdf8-ffff-ffff8ee8d0b8/FS12-01-swa-principles.pdf', display_text: 'Software Architecture: Principles and Styles (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.ifi.uzh.ch/dam/jcr:ffffffff-fd5f-cdf8-ffff-ffffb30a1522/02-swa-patterns.pdf', display_text: 'Software Architecture Patterns (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.ifi.uzh.ch/dam/jcr:ffffffff-fd5f-cdf8-ffff-ffffde53807c/swa-04-ATAM.pdf', display_text: 'Architecture Analysis and ATAM (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.ifi.uzh.ch/dam/jcr:ffffffff-fd5f-cdf8-0000-00007ac98b78/swa-03-ACME.pdf', display_text: 'Architecture Description Languages and ACME (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
