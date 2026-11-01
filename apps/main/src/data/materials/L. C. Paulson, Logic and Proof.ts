import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Logic and Proof',
      author: [ { given: 'Lawrence C.', family: 'Paulson' } ],
      genre: 'Lecture notes, slides, and theorem-prover examples',
      medium: 'PDF and Standard ML',
      issued: { 'date-parts': [ [ 2022 ] ] },
      version: '2021–22',
      language: 'en',
      note: 'Lent 2022; notes and slides carry a 2021 copyright.',
      URL: 'https://www.cl.cam.ac.uk/teaching/2122/LogicProof/materials.html',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        institution: [ 'University of Cambridge' ],
        URL: [
          { link: 'https://www.cl.cam.ac.uk/teaching/2122/LogicProof/', display_text: 'Course information' },
        ],
        free_material: [
          { link: 'https://www.cl.cam.ac.uk/teaching/2122/LogicProof/logic-notes.pdf', display_text: 'Lecture notes (PDF)', 'Content-Type': 'application/pdf', note: '35 pages' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2122/LogicProof/logic-slides.pdf', display_text: 'Slides (PDF)', 'Content-Type': 'application/pdf', note: '170 pages' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2122/LogicProof/folderol.ML', display_text: 'Standard ML theorem-prover source' },
          { link: 'https://www.cl.cam.ac.uk/teaching/2122/LogicProof/testsuite.ML', display_text: 'Standard ML examples' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
