import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Programming Language Design and Implementation',
      author: [ { given: 'Michael L.', family: 'Scott' } ],
      'collection-title': 'CSC 2/454',
      genre: 'Lecture notes',
      medium: 'PDF and plain text',
      issued: { 'date-parts': [ [ 2025 ] ] },
      version: 'Fall 2025',
      language: 'en',
      URL: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
      custom: {
        institution: 'University of Rochester',
        URL: [
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/', display_text: 'Course information' }, // Course title, code, instructor, and semester.
          { link: 'https://www.cs.rochester.edu/u/scott/', display_text: 'Author homepage' }, // Full author name.
        ],
        free_material: [
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/01-introduction.pdf', display_text: '01-introduction.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/02-syntax.pdf', display_text: '02-syntax.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/03-names.pdf', display_text: '03-names.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/04-semantics.pdf', display_text: '04-semantics.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/06-control_flow.pdf', display_text: '06-control_flow.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/07-type_systems.pdf', display_text: '07-type_systems.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/07_conformance.txt', display_text: '07_conformance.txt', 'Content-Type': 'text/plain' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/08-composite_types.pdf', display_text: '08-composite_types.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/09-subroutines.pdf', display_text: '09-subroutines.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/10-objects.pdf', display_text: '10-objects.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/11-functional.pdf', display_text: '11-functional.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/13-concurrency.pdf', display_text: '13-concurrency.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/14-scripting.pdf', display_text: '14-scripting.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/15-code_gen.pdf', display_text: '15-code_gen.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/16-runtime.pdf', display_text: '16-runtime.pdf', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.rochester.edu/courses/254/fall2025/notes/bounded_buffers.pdf', display_text: 'bounded_buffers.pdf', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
