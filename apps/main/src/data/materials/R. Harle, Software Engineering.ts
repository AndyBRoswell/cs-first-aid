import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Software Engineering',
      author: [ { given: 'Robert', family: 'Harle' } ],
      'collection-title': 'Software and Security Engineering',
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'University of Cambridge',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: '2025–2026',
      'number-of-pages': 284,
      language: 'en',
      note: '6 lectures, Easter Term 2026; the course page describes these slides as a draft subject to updates.',
      URL: 'https://www.cl.cam.ac.uk/teaching/2526/SWSecEng/materials.html',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        free_material: [
          { link: 'https://www.cl.cam.ac.uk/teaching/2526/SWSecEng/L1.pdf', display_text: 'Lecture 1 (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2526/SWSecEng/L2.pdf', display_text: 'Lecture 2 (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2526/SWSecEng/L3.pdf', display_text: 'Lecture 3 (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2526/SWSecEng/L4.pdf', display_text: 'Lecture 4 (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2526/SWSecEng/L5.pdf', display_text: 'Lecture 5 (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2526/SWSecEng/L6.pdf', display_text: 'Lecture 6 (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
