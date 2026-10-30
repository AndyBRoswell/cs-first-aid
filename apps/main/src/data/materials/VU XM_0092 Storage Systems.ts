import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Storage Systems',
      author: [
        { given: 'Animesh', family: 'Trivedi' },
      ],
      genre: 'Lecture slides',
      medium: 'PDF and Google Slides',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'XM_0092',
      issued: { 'date-parts': [ [ 2023 ] ] },
      version: 'Autumn 2023',
      'number-of-pages': 758, // Total across 11 slide decks.
      language: 'en',
      URL: 'https://animeshtrivedi.github.io/course-stosys/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://atlarge-research.com/courses/storage-systems-vu/', display_text: 'Research group course page' },
          { link: 'https://studiegids.vu.nl/en/courses/2023-2024/XM_0092', display_text: 'Official course description (2023–2024)' },
        ],
        free_material: {
          Slides: [
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture1-introduction.pdf', display_text: 'Lecture 1: Welcome and introduction (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture2-sw-nvme-sw-implications.pdf', display_text: 'Lecture 2: Host interfacing and software implications (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture3-ftl-gc.pdf', display_text: 'Lecture 3: FTL and garbage collection (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture4-fs.pdf', display_text: 'Lecture 4: Flash-based file systems (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture5-kv.pdf', display_text: 'Lecture 5: Key-value stores (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture6-pmem.pdf', display_text: 'Lecture 6: Byte-addressable persistent memories (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture7-networked-flash.pdf', display_text: 'Lecture 7: Networked NVM storage (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture8-programmable-storage.pdf', display_text: 'Lecture 8: Programmable storage (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture9-ds1.pdf', display_text: 'Lecture 9: Distributed storage systems I (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture10-ds2.pdf', display_text: 'Lecture 10: Distributed storage systems II (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-stosys-lecture11-emerging-topics.pdf', display_text: 'Lecture 11: CXL and io_uring (PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
          ],
          'Editable slides': [
            { link: 'https://drive.google.com/drive/folders/1Ob994kg2UBFdrdgeEAReNILmCx7mSlxT', display_text: 'All 11 slide decks (Google Slides)', 'Content-Type': 'text/html', license: 'CC-BY-4.0' },
          ],
          'Course materials': [
            { link: 'https://drive.google.com/drive/folders/1K165plw4xDHZFZHeuhMvpqgEP8MaRBlT', display_text: 'Complete course materials (Google Drive)', 'Content-Type': 'text/html' },
            { link: 'https://atlarge-research.com/pdfs/2024-stosys-education.pdf', display_text: 'Reviving Storage Systems Education in the 21st Century — An experience report (CCGrid 2024)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/1XcGmP2kTrY-OW563licFKnbG05_p-jiU8E3eGHVkFY4/edit', display_text: 'CCGrid 2024 presentation (Google Slides)', 'Content-Type': 'text/html' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Storage Systems (StoSys) Course Project Handbook',
      author: [
        { given: 'Animesh', family: 'Trivedi' },
        { given: 'Matthijs', family: 'Jansen' },
        { given: 'Zebin', family: 'Ren' },
        { given: 'Krijn', family: 'Doekemeijer' },
        { given: 'Nick', family: 'Tehrany' },
        { given: 'Sudarsan', family: 'Sivakumar' },
      ],
      genre: 'Laboratory manual',
      medium: 'PDF and Google Docs',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'XM_0092',
      issued: { 'date-parts': [ [ 2023 ] ] },
      version: '4.0',
      'number-of-pages': 48,
      language: 'en',
      URL: 'https://atlarge-research.com/pdfs/stosys/2023-2024-stosys-handbook-4.0.pdf',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://animeshtrivedi.github.io/course-stosys/', display_text: 'Lecturer course page and public-release statement' },
        ],
        free_material: {
          Handbook: [
            { link: 'https://atlarge-research.com/pdfs/stosys/2023-2024-stosys-handbook-4.0.pdf', display_text: 'Project handbook v4.0 (2023–2024, PDF)', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
            { link: 'https://docs.google.com/document/d/19oW0B38IMWXao2LHkuiSicIoLHS9ctyw_9LdDHiwjE0/edit', display_text: 'Editable project handbook (Google Docs)', 'Content-Type': 'text/html', license: 'CC-BY-4.0' },
          ],
          Framework: [
            { link: 'https://drive.google.com/drive/folders/1HFMHR_UiPwXFUlpvvWr28WWSem-gdMmG', display_text: 'Official project-code folder', 'Content-Type': 'text/html' },
            { link: 'https://drive.usercontent.google.com/download?id=1GtZKSt49YbY9oP0TQSbQXOYrkWJShQgD&export=download&authuser=0&confirm=t', display_text: '2023 framework: C/C++, CMake and patched libnvme (ZIP)', 'Content-Type': 'application/zip' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
