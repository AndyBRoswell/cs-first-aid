import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Programming Large-scale Parallel Systems',
      author: [ { given: 'Henri E.', family: 'Bal' }, { given: 'Clemens', family: 'Grelck' }, { given: 'Jason', family: 'Maassen' } ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'X_400161',
      issued: { 'date-parts': [ [ 2017 ] ] },
      version: 'Fall 2017',
      'number-of-pages': 576, // Total across the 14 linked slide decks.
      language: 'en',
      URL: 'https://www.cs.vu.nl/~bal/parallel-programming.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://www.cs.vu.nl/~bal/college17/background17.pdf', display_text: '1. Background (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/introduction17.pdf', display_text: '2. Introduction to parallel programming (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/arch17.pdf', display_text: '3a. Parallel machines: introduction (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/ParallelMachines17.pdf', display_text: '3b. Parallel machines: cluster computers (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/das-2017.pdf', display_text: '3c. The Distributed ASCI Supercomputer (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/metrics17.pdf', display_text: '3d. Parallel machines: performance metrics (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/messagepassing17.pdf', display_text: '4. Message passing (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college14/mpi14.pdf', display_text: '5. MPI (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/hpf17.pdf', display_text: '6. High Performance Fortran (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/NLeSC-EC17.pdf', display_text: '7. Climate modelling on distributed supercomputers (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/barnes17.pdf', display_text: '8a. N-body methods (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college15/tds15.pdf', display_text: '8b. Transposition-driven scheduling (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college16/slides-chapel-all.pdf', display_text: '9. Chapel (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://www.cs.vu.nl/~bal/college17/summary17.pdf', display_text: '10. Summary (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
