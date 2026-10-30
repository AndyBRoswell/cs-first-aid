import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Computer Networks',
      author: [
        { given: 'Jesse', family: 'Donkervliet' },
        { given: 'Gonçalo Amado', family: 'Mesquita' },
        { given: 'Nehir', family: 'Kırkgöz' },
        { given: 'Daniel-Ştefan', family: 'Halasz' },
        { given: 'Balakrishnan', family: 'Chandrasekaran' },
      ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'X_400487',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: '2025–2026',
      'number-of-pages': 811, // Total across 10 slide decks; print handouts excluded.
      language: 'en',
      URL: 'https://compnet2526.atlarge-research.com/docs/course-components/lectures/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://studiegids.vu.nl/en/courses/2026-2027/X_400487', display_text: 'Official course description (X_400487, 2026–2027)' },
          { link: 'https://compnet2526.atlarge-research.com/', display_text: 'Course website (2025–2026)' },
          { link: 'https://jdonkervliet.com/teaching/', display_text: 'Lecturer teaching page' },
        ],
        free_material: {
          Slides: [
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-1-intro-physical-layer-2025-2026.pdf', display_text: 'Lecture 1: Introduction and physical layer (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-2-chp-3-data-link-layer-part-1-2025-2026.pdf', display_text: 'Lecture 2: Data link layer, part 1 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-3-chp-3-data-link-layer-part-2-2025-2026.pdf', display_text: 'Lecture 3: Data link layer, part 2 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-4-chp-4-mac-sublayer-2025-2026.pdf', display_text: 'Lecture 4: MAC sublayer (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-5-chp-5-network-layer-part-1-2025-2026.pdf', display_text: 'Lecture 5: Network layer, part 1 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-6-chp-5-network-layer-part-2-2025-2026.pdf', display_text: 'Lecture 6: Network layer, part 2 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-7-transport-layer-part-1-2026.pdf', display_text: 'Lecture 7: Transport layer, part 1 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-8-transport-layer-part-2-2026.pdf', display_text: 'Lecture 8: Transport layer, part 2 (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-9-chp-7-application-layer-part-1-2025-2026.pdf', display_text: 'Lecture 9: Application layer (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-10-wrap-up-2025-2026.pdf', display_text: 'Lecture 10: Course recap (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Print handouts (6 slides per page)': [
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-1-intro-physical-layer-2025-2026-6up.pdf', display_text: 'Lecture 1: Introduction and physical layer (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-2-chp-3-data-link-layer-part-1-2025-2026-6up.pdf', display_text: 'Lecture 2: Data link layer, part 1 (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-3-chp-3-data-link-layer-part-2-2025-2026-6up.pdf', display_text: 'Lecture 3: Data link layer, part 2 (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-4-chp-4-mac-sublayer-2025-2026-6up.pdf', display_text: 'Lecture 4: MAC sublayer (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-5-chp-5-network-layer-part-1-2025-2026-6up.pdf', display_text: 'Lecture 5: Network layer, part 1 (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-6-chp-5-network-layer-part-2-2025-2026-6up.pdf', display_text: 'Lecture 6: Network layer, part 2 (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-9-chp-7-application-layer-part-1-2025-2026-6up.pdf', display_text: 'Lecture 9: Application layer (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/lecture-10-wrap-up-2025-2026-6up.pdf', display_text: 'Lecture 10: Course recap (6-up PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Computer Networks',
      author: [
        { given: 'Lukas', family: 'Kompatscher' },
        { given: 'Lucas', family: 'Beliën' },
        { given: 'Alan', family: 'Edwin' },
        { given: 'Nehir', family: 'Kırkgöz' },
        { given: 'Konstantinos', family: 'Timinis' },
      ],
      genre: 'Tutorial slides',
      medium: 'PDF',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'X_400487',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: '2025–2026',
      'number-of-pages': 284, // Total across 4 slide decks; print handouts excluded.
      language: 'en',
      URL: 'https://compnet2526.atlarge-research.com/docs/course-components/tutorials/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: {
          Slides: [
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-1-physical-layer-link-layer.pdf', display_text: 'Tutorial 1: Physical and link layers (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-2-mac-layer.pdf', display_text: 'Tutorial 2: MAC layer (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-3-network-layer.pdf', display_text: 'Tutorial 3: Network layer (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-4-transport-layer.pdf', display_text: 'Tutorial 4: Transport layer (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Print handouts (6 slides per page)': [
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-1-physical-layer-link-layer-6up.pdf', display_text: 'Tutorial 1: Physical and link layers (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-2-mac-layer-6up.pdf', display_text: 'Tutorial 2: MAC layer (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-3-network-layer-6up.pdf', display_text: 'Tutorial 3: Network layer (6-up PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://compnet2526.atlarge-research.com/slides/tutorial-4-transport-layer-6up.pdf', display_text: 'Tutorial 4: Transport layer (6-up PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Computer Networks Lab Manual',
      genre: 'Laboratory manual',
      medium: 'HTML',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'X_400487',
      version: '2025–2026',
      language: 'en',
      URL: 'https://compnet2526.atlarge-research.com/docs/lab-manual/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: {
          Assignments: [
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/mandatory-assignments/a1/', display_text: 'A1: Chat Client', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/mandatory-assignments/a2/', display_text: 'A2: TCP Trace Analysis', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/extra-assignments/a3/', display_text: 'A3: Chat Server', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/extra-assignments/a4/', display_text: 'A4: HTTP2 Trace Analysis', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/extra-assignments/a5/', display_text: 'A5: HTTP Server', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/extra-assignments/a6/', display_text: 'A6: DNS Server', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/extra-assignments/a7/', display_text: 'A7: Unreliable Chat Client', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/extra-assignments/a8/', display_text: 'A8: Multiplayer Game', 'Content-Type': 'text/html' },
          ],
          'Framework and local test servers': [
            { link: 'https://github.com/ComputerScienceEducation/cn-lab-2026', display_text: 'Official lab framework (GitHub)', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/docs/lab-manual/setup/framework-setup/', display_text: 'Environment setup (Python 3.11.11)', 'Content-Type': 'text/html' },
            { link: 'https://compnet2526.atlarge-research.com/pip/framework-0.1.0-py3-none-any.whl', display_text: 'A1 test server package (Python wheel, 0.1.0)' }, // PyArmor-obfuscated; requires Python 3.11.11.
            { link: 'https://compnet2526.atlarge-research.com/pip/framework-0.2.0-py3-none-any.whl', display_text: 'A7 test server package (Python wheel, 0.2.0)' }, // PyArmor-obfuscated; requires Python 3.11.11.
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
