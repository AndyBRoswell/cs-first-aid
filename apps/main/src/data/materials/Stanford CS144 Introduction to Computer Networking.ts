import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Introduction to Computer Networking',
      author: [ { given: 'Keith', family: 'Winstein' }, { given: 'Nick', family: 'McKeown' } ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Stanford University',
      number: 'CS144',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: 'Fall 2026',
      'number-of-pages': 163, // Total across 8 slide decks.
      language: 'en',
      URL: 'https://cs144.github.io/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      note: 'The Fall 2026 course is in progress; this collection contains the materials published by the access date.',
      custom: {
        free_material: {
          Slides: [
            { link: 'https://cs144.github.io/handouts/week-1-logistics.pdf', display_text: 'Course introduction (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/handouts/week-1-reliability.pdf', display_text: 'Reliability from unreliability (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/handouts/week-2-tcp.pdf', display_text: 'TCP I (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/1GEFFm6FJ9G_0qlZEm8I8PPschbUfFB7drX9-wDf12Q8/export/pdf', display_text: 'TCP particulars (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/handouts/week-3-packet-switching-a.pdf', display_text: 'Packet switching I (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/handouts/week-4-why_congestion_control.pdf', display_text: 'Why congestion control? (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/handouts/week-4-what_congestion_control.pdf', display_text: 'What congestion control? (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/handouts/week-4-how_congestion_control.pdf', display_text: 'How congestion control (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Editable source': [
            { link: 'https://cs144.github.io/handouts/week-1-logistics.pptx', display_text: 'Course introduction (PPTX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://cs144.github.io/handouts/week-1-reliability.pptx', display_text: 'Reliability from unreliability (PPTX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://cs144.github.io/handouts/week-3-packet-switching-a.pptx', display_text: 'Packet switching I (PPTX)', 'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation' },
            { link: 'https://docs.google.com/presentation/d/1GEFFm6FJ9G_0qlZEm8I8PPschbUfFB7drX9-wDf12Q8/edit?usp=sharing', display_text: 'TCP particulars (Google Slides)', 'Content-Type': 'text/html' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Introduction to Computer Networking',
      genre: 'Lecture notes',
      medium: 'Google Docs and PDF',
      publisher: 'Stanford University',
      number: 'CS144',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: 'Fall 2026',
      'number-of-pages': 23, // Total across 6 notes exported as PDF.
      language: 'en',
      URL: 'https://cs144.github.io/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      note: 'The Fall 2026 course is in progress; this collection contains the materials published by the access date.',
      custom: {
        lecturer: [ { given: 'Keith', family: 'Winstein' } ],
        free_material: {
          'Lecture notes': [
            { link: 'https://docs.google.com/document/d/1uODk7ESsFE9Fz_aUaovu0gGX4rsb4WM-UXgoe5RoYfo/edit?usp=sharing', display_text: 'Datagrams, encapsulation, and multiplexing (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1VInHwTMV_sY9u3EoKrC_JG4saDE5YM9n-RGETN4e9UE/edit?usp=sharing', display_text: 'Reliability from unreliability (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1s6_yZ6zCZqw18q4mZbQXgXmTkufTDDgNYUhIgY5Kwu8/view', display_text: 'TCP I (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1bgj02U2J6MGObNMg0z7ajPSK2JlmRgSJO5OFwY-b_cc/edit?usp=sharing', display_text: 'Packet switching I (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1e7A2xa_gAaFuZqJtQk6hE0gfMXYV_gO8l_AcXycMI1g/edit?usp=sharing', display_text: 'Why congestion control? (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1uCFpj9ttiqNYESQ1cNSWwcAdn_JiRj3C8-pmkrxoN6I/edit?usp=sharing', display_text: 'What congestion control? (Google Docs)', 'Content-Type': 'text/html' },
          ],
          'PDF exports': [
            { link: 'https://docs.google.com/document/d/1uODk7ESsFE9Fz_aUaovu0gGX4rsb4WM-UXgoe5RoYfo/export?format=pdf', display_text: 'Datagrams, encapsulation, and multiplexing (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1VInHwTMV_sY9u3EoKrC_JG4saDE5YM9n-RGETN4e9UE/export?format=pdf', display_text: 'Reliability from unreliability (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1s6_yZ6zCZqw18q4mZbQXgXmTkufTDDgNYUhIgY5Kwu8/export?format=pdf', display_text: 'TCP I (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1bgj02U2J6MGObNMg0z7ajPSK2JlmRgSJO5OFwY-b_cc/export?format=pdf', display_text: 'Packet switching I (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1e7A2xa_gAaFuZqJtQk6hE0gfMXYV_gO8l_AcXycMI1g/export?format=pdf', display_text: 'Why congestion control? (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1uCFpj9ttiqNYESQ1cNSWwcAdn_JiRj3C8-pmkrxoN6I/export?format=pdf', display_text: 'What congestion control? (PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Introduction to Computer Networking: Lab Assignments',
      genre: 'Laboratory manual',
      medium: 'PDF',
      publisher: 'Stanford University',
      number: 'CS144',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: 'Fall 2026',
      'number-of-pages': 44, // Total across checkpoints 0–4.
      language: 'en',
      URL: 'https://cs144.github.io/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      note: 'Checkpoints 0–4 were public on the access date. Most tests require access to Stanford\'s grading server; the public Imp framework includes only some local tests.',
      custom: {
        lecturer: [ { given: 'Keith', family: 'Winstein' } ],
        free_material: {
          Assignments: [
            { link: 'https://cs144.github.io/assignments/check0.pdf', display_text: 'Checkpoint 0: networking warmup (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/assignments/check1.pdf', display_text: 'Checkpoint 1: stitching substrings into a byte stream (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/assignments/check2.pdf', display_text: 'Checkpoint 2: the TCP receiver (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/assignments/check3.pdf', display_text: 'Checkpoint 3: the TCP sender (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://cs144.github.io/assignments/check4.pdf', display_text: 'Checkpoint 4: measuring the real world (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Framework and guidance': [
            { link: 'https://github.com/CS144/imp', display_text: 'Official Imp starter code (partial local tests)', note: 'Most tests require access to Stanford\'s grading server.', 'Content-Type': 'text/html' },
            { link: 'https://cs144.github.io/lab_faq.html', display_text: 'Lab FAQ', 'Content-Type': 'text/html' },
            { link: 'https://cs144.github.io/logistics.pdf', display_text: 'Course logistics and prerequisites (PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Introduction to Computer Networking',
      author: [ { given: 'Keith', family: 'Winstein' }, { given: 'Nick', family: 'McKeown' } ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Stanford University',
      number: 'CS144',
      issued: { 'date-parts': [ [ 2025 ] ] },
      version: 'Fall 2025',
      'number-of-pages': 200, // Total across 8 slide decks.
      language: 'en',
      URL: 'https://web.archive.org/web/20260506063931/https://cs144.github.io/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        free_material: [
          { link: 'https://web.archive.org/web/20251115051719id_/https://cs144.github.io/handouts/week-1-logistics.pdf', display_text: 'Course introduction (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251210075705id_/https://cs144.github.io/handouts/week-1-reliability.pdf', display_text: 'Reliability from unreliability (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251210075651id_/https://cs144.github.io/handouts/week-2-tcp.pdf', display_text: 'TCP I (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251210075652id_/https://cs144.github.io/handouts/week-3-packet-switching-a.pdf', display_text: 'TCP III and packet switching I (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20260221194345id_/https://cs144.github.io/handouts/week-4-why_congestion_control.pdf', display_text: 'Why congestion control? (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251210075703id_/https://cs144.github.io/handouts/week-4-what_congestion_control.pdf', display_text: 'What congestion control? (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251210080344id_/https://cs144.github.io/handouts/week-4-how_congestion_control.pdf', display_text: 'How congestion control? (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251210080218id_/https://cs144.github.io/handouts/routing-intro.pdf', display_text: 'Routing (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Introduction to Computer Networking',
      genre: 'Lecture notes',
      medium: 'Google Docs and PDF',
      publisher: 'Stanford University',
      number: 'CS144',
      issued: { 'date-parts': [ [ 2025 ] ] },
      version: 'Fall 2025',
      'number-of-pages': 38, // Total across 9 notes exported as PDF.
      language: 'en',
      URL: 'https://web.archive.org/web/20260506063931/https://cs144.github.io/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      note: 'The course index is archived; the Google Docs links remain live documents.',
      custom: {
        lecturer: [ { given: 'Keith', family: 'Winstein' } ],
        free_material: {
          'Lecture notes': [
            { link: 'https://docs.google.com/document/d/1uODk7ESsFE9Fz_aUaovu0gGX4rsb4WM-UXgoe5RoYfo/edit?usp=sharing', display_text: 'Datagrams, encapsulation, and multiplexing (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1VInHwTMV_sY9u3EoKrC_JG4saDE5YM9n-RGETN4e9UE/edit?usp=sharing', display_text: 'Reliability from unreliability (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1s6_yZ6zCZqw18q4mZbQXgXmTkufTDDgNYUhIgY5Kwu8/view', display_text: 'TCP I (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1bgj02U2J6MGObNMg0z7ajPSK2JlmRgSJO5OFwY-b_cc/edit?usp=sharing', display_text: 'TCP III and packet switching I (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1e7A2xa_gAaFuZqJtQk6hE0gfMXYV_gO8l_AcXycMI1g/edit?usp=sharing', display_text: 'Why congestion control? (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1uCFpj9ttiqNYESQ1cNSWwcAdn_JiRj3C8-pmkrxoN6I/edit?usp=sharing', display_text: 'What congestion control? (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1B31j3miOBaLSSLU-uvD5Z2wFjvHiCrScI5OI7HhWIv0/edit', display_text: 'The eras tour of home networking (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1Yx1ZIVUGx2uRy_Vi6WICisM4nKurRNlk6Kn9bdMIG_8/edit', display_text: 'The eras tour of home networking II (Google Docs)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/document/d/1wI5lYYobn9quPmr_ViPF2D94OWtPA9eWO-TPmFZXxXM/edit?usp=sharing', display_text: 'Elastic buffers (Google Docs)', 'Content-Type': 'text/html' },
          ],
          'PDF exports': [
            { link: 'https://docs.google.com/document/d/1uODk7ESsFE9Fz_aUaovu0gGX4rsb4WM-UXgoe5RoYfo/export?format=pdf', display_text: 'Datagrams, encapsulation, and multiplexing (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1VInHwTMV_sY9u3EoKrC_JG4saDE5YM9n-RGETN4e9UE/export?format=pdf', display_text: 'Reliability from unreliability (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1s6_yZ6zCZqw18q4mZbQXgXmTkufTDDgNYUhIgY5Kwu8/export?format=pdf', display_text: 'TCP I (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1bgj02U2J6MGObNMg0z7ajPSK2JlmRgSJO5OFwY-b_cc/export?format=pdf', display_text: 'TCP III and packet switching I (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1e7A2xa_gAaFuZqJtQk6hE0gfMXYV_gO8l_AcXycMI1g/export?format=pdf', display_text: 'Why congestion control? (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1uCFpj9ttiqNYESQ1cNSWwcAdn_JiRj3C8-pmkrxoN6I/export?format=pdf', display_text: 'What congestion control? (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1B31j3miOBaLSSLU-uvD5Z2wFjvHiCrScI5OI7HhWIv0/export?format=pdf', display_text: 'The eras tour of home networking (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1Yx1ZIVUGx2uRy_Vi6WICisM4nKurRNlk6Kn9bdMIG_8/export?format=pdf', display_text: 'The eras tour of home networking II (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/document/d/1wI5lYYobn9quPmr_ViPF2D94OWtPA9eWO-TPmFZXxXM/export?format=pdf', display_text: 'Elastic buffers (PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Introduction to Computer Networking: Lab Assignments',
      genre: 'Laboratory manual',
      medium: 'PDF',
      publisher: 'Stanford University',
      number: 'CS144',
      issued: { 'date-parts': [ [ 2025 ] ] },
      version: 'Fall 2025',
      'number-of-pages': 65, // Total across checkpoints 0–7.
      language: 'en',
      URL: 'https://web.archive.org/web/20260506063931/https://cs144.github.io/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      note: 'The eight assignment handouts are preserved from the official course website. The original Minnow repository is currently unavailable; a complete starter-code download has not been verified.',
      custom: {
        lecturer: [ { given: 'Keith', family: 'Winstein' } ],
        URL: [
          { link: 'https://web.archive.org/web/20260215123727/https://github.com/CS144/minnow', display_text: 'Archived official Minnow repository landing page', note: 'The original repository is currently unavailable; a complete starter-code download has not been verified.' },
        ],
        free_material: [
          { link: 'https://web.archive.org/web/20251204045338id_/https://cs144.github.io/assignments/check0.pdf', display_text: 'Checkpoint 0: Networking warmup (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251001060558id_/https://cs144.github.io/assignments/check1.pdf', display_text: 'Checkpoint 1: Stitching substrings into a byte stream (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20260517084054id_/https://cs144.github.io/assignments/check2.pdf', display_text: 'Checkpoint 2: The TCP receiver (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20260825022355id_/https://cs144.github.io/assignments/check3.pdf', display_text: 'Checkpoint 3: The TCP sender (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20260825022409id_/https://cs144.github.io/assignments/check4.pdf', display_text: 'Checkpoint 4: Measuring the real world (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251119223735id_/https://cs144.github.io/assignments/check5.pdf', display_text: 'Checkpoint 5: Down the stack: the network interface (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251122015342id_/https://cs144.github.io/assignments/check6.pdf', display_text: 'Checkpoint 6: Building an IP router (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://web.archive.org/web/20251205185243id_/https://cs144.github.io/assignments/check7.pdf', display_text: 'Checkpoint 7: Making an Internet + something creative! (draft) (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

