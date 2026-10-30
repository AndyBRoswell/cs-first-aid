import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Modern Storage Systems',
      author: [
        { given: 'Angelos', family: 'Bilas' },
        { given: 'Georgios', family: 'Saloustros' },
        { given: 'John', family: 'Malliotakis' },
      ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'University of Crete',
      number: 'CS647',
      issued: { 'date-parts': [ [ 2022 ], [ 2023 ] ] },
      version: '2022–2023', // Reused in the Fall 2025 course.
      'number-of-pages': 257, // Total across 11 slide decks.
      language: 'en',
      URL: 'https://www.csd.uoc.gr/~hy647/syllabus.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://www.csd.uoc.gr/~hy647/', display_text: 'Course website (Fall 2025)' },
        ],
        free_material: {
          Slides: [
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/01a_intro.pdf', display_text: 'Introduction (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/01b_workloads.pdf', display_text: 'Workload characterization (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/02_devices.pdf', display_text: 'Storage devices and technology trends (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/03_lsm.pdf', display_text: 'Log-structured merge trees (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/04_lsm_indexing.pdf', display_text: 'LSM indexing (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/08_Be-trees.pdf', display_text: 'Bε-trees (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/05_compactions.pdf', display_text: 'Compaction techniques (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/06_lsm_vat_5min.pdf', display_text: 'LSM analysis and tradeoffs (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/07_recovery.pdf', display_text: 'Recovery (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/10_rdma.pdf', display_text: 'RDMA (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://www.csd.uoc.gr/~hy647/lectures/09_iopath.pdf', display_text: 'I/O approaches in modern storage systems (PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Modern Storage Systems: Assignments',
      genre: 'Assignments',
      medium: 'HTML',
      publisher: 'University of Crete',
      number: 'CS647',
      issued: { 'date-parts': [ [ 2022 ] ] },
      version: '2022', // Reused in the Fall 2025 course.
      language: 'en',
      URL: 'https://www.csd.uoc.gr/~hy647/assignments.html',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        lecturer: [ { given: 'Angelos', family: 'Bilas' } ], // Listed as instructor, not assignment author.
        URL: [
          { link: 'https://www.csd.uoc.gr/~hy647/', display_text: 'Course website (Fall 2025)' },
        ],
        free_material: [
          { link: 'https://www.csd.uoc.gr/~hy647/as1.html', display_text: 'Assignment 1 — tinyblob: device I/O and measurement', 'Content-Type': 'text/html' },
          { link: 'https://www.csd.uoc.gr/~hy647/as2.html', display_text: 'Assignment 2 — tinyindex: logical-to-physical translation and KV operations', 'Content-Type': 'text/html' },
          { link: 'https://www.csd.uoc.gr/~hy647/as3.html', display_text: 'Assignment 3 — tinylog: write-ahead logging and crash recovery', 'Content-Type': 'text/html' },
          { link: 'https://www.csd.uoc.gr/~hy647/as4.html', display_text: 'Assignment 4 — tinyperf: performance comparison with RocksDB', 'Content-Type': 'text/html' },
          { link: 'https://www.csd.uoc.gr/~hy647/assignments.html', display_text: 'Assignment schedule and self-proposed project requirements (Fall 2025)', 'Content-Type': 'text/html' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
