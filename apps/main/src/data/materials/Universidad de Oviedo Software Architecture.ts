import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Software Architecture Course',
      author: [
        { given: 'Jose Emilio', family: 'Labra Gayo' },
        { given: 'Pablo', family: 'González González' },
        { given: 'Diego', family: 'Martín Fernández' },
        { given: 'Celia', family: 'Melendi Lavandera' },
      ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Universidad de Oviedo',
      issued: { 'date-parts': [ [ 2026 ] ] },
      version: '2025–2026',
      URL: 'https://arquisoft.github.io/course2526.html',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        URL: [
          { link: 'https://github.com/Arquisoft/Arquisoft.github.io', display_text: 'GitHub' },
        ],
        free_material: [
          {
            link: 'https://arquisoft.github.io/course2526.html#lectureNotes',
            display_text: 'Lecture slides (PDF) and recordings (English / Spanish)',
            'Content-Type': 'text/html',
            note: 'Some slides retain earlier dates; lecture recordings were reused from 2020–21.',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
