import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Delft Students on Software Architecture',
      author: [ { literal: 'TU Delft IN4315 Students' } ],
      publisher: 'Technische Universiteit Delft',
      issued: { 'date-parts': [ [ 2022 ] ] },
      version: '2022',
      language: 'en',
      note: 'Student-written architecture analyses of open source systems, produced for the Spring 2022 IN4315 course and published as a series of technical essays.',
      URL: 'https://desosa2022.netlify.app/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        URL: [
          { link: 'https://desosa2022.netlify.app/about/', display_text: 'About and license' },
        ],
        free_material: [
          { link: 'https://desosa2022.netlify.app/projects/', display_text: 'Architecture case studies (HTML)', 'Content-Type': 'text/html', license: 'CC-BY-SA-4.0' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
