import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Modern (Computer) Storage Systems',
      author: [
        { given: 'Juncheng', family: 'Yang' },
      ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Harvard University',
      number: 'CS2640',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: 'Spring 2026',
      'number-of-pages': 568, // Total across 13 instructor slide decks; guest lecture excluded.
      language: 'en',
      URL: 'https://moderncomputerstorage.com/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://systems.seas.harvard.edu/teaching/', display_text: 'Harvard Systems Group teaching page' },
          { link: 'https://beta.my.harvard.edu/course/COMPSCI2640/2026-Spring/001', display_text: 'Official course catalogue (Spring 2026)' },
        ],
        free_material: {
          Slides: [
            { link: 'https://moderncomputerstorage.com/slides/1_intro.pdf', display_text: 'Course overview (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/2_hdd.pdf', display_text: 'Hard disk drives (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/3_ssd1.pdf', display_text: 'Solid-state drives, part 1 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/4_ssd2.pdf', display_text: 'Solid-state drives, part 2 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/4_block.pdf', display_text: 'SSD continuation and block storage (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/5_fs1.pdf', display_text: 'File systems, part 1 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/6_fs2.pdf', display_text: 'File systems, part 2 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/7_distributed_fs1.pdf', display_text: 'Distributed storage systems, part 1 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/8_distributed_fs2.pdf', display_text: 'Distributed storage systems, part 2 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/9_performance.pdf', display_text: 'Storage performance (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/10_cache.pdf', display_text: 'Software caches (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/11_reliability.pdf', display_text: 'Storage reliability (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/slides/12_protection.pdf', display_text: 'Data security and protection (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Guest lecture': [
            { link: 'https://moderncomputerstorage.com/slides/vSAN.pdf', display_text: 'Wenguang Wang: Building a Production Storage System in Practice (PDF)', 'Content-Type': 'application/pdf' },
          ],
          Readings: [
            { link: 'https://moderncomputerstorage.com/#schedule', display_text: 'Course schedule and paper reading list', 'Content-Type': 'text/html' },
            { link: 'https://pages.cs.wisc.edu/~remzi/OSTEP/', display_text: 'Operating Systems: Three Easy Pieces — background reading', 'Content-Type': 'text/html' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Course Project',
      genre: 'Course project and assignments',
      medium: 'HTML',
      publisher: 'Harvard University',
      number: 'CS2640',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: 'Spring 2026',
      language: 'en',
      URL: 'https://moderncomputerstorage.com/project',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        lecturer: [ { given: 'Juncheng', family: 'Yang' } ], // The project page has no author byline; its footer names the copyright holder.
        URL: [
          { link: 'https://moderncomputerstorage.com/', display_text: 'Course website' },
          { link: 'https://moderncomputerstorage.com/policy', display_text: 'Course policy and grading' },
          { link: 'https://cachecompetition.com/login', display_text: 'Competition platform (login required; post-login eligibility unverified)' },
        ],
        free_material: {
          Project: [
            { link: 'https://github.com/HarvardMadSys/cs2640_project_2026Spring', display_text: 'Official collection of student project submissions', 'Content-Type': 'text/html' },
            { link: 'https://moderncomputerstorage.com/templates/usenix-latex-template.zip', display_text: 'USENIX LaTeX report template (ZIP)', 'Content-Type': 'application/zip' },
            { link: 'https://moderncomputerstorage.com/templates/usenix2022.doc', display_text: 'USENIX Word report template', 'Content-Type': 'application/msword' },
            { link: 'https://moderncomputerstorage.com/templates/usenix-2020-09.pdf', display_text: 'USENIX sample paper (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Caching assignment': [
            { link: 'https://moderncomputerstorage.com/competition', display_text: 'Caching competition assignment overview', 'Content-Type': 'text/html' },
            { link: 'https://github.com/1a1a11a/libCacheSim', display_text: 'libCacheSim: public framework, examples and local evaluation', 'Content-Type': 'text/html', license: 'Apache-2.0' },
          ],
          'Paper discussion': [
            { link: 'https://moderncomputerstorage.com/discussion', display_text: 'Paper presentation and discussion guidance', 'Content-Type': 'text/html' },
          ],
          'Practice examination': [
            { link: 'https://moderncomputerstorage.com/CS2640_practice.pdf', display_text: 'Practice midterm examination (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://moderncomputerstorage.com/CS2640_practice_solution.pdf', display_text: 'Practice midterm solutions (PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
