import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Fuzzing Book',
      author: [ { given: 'Andreas', family: 'Zeller' }, { given: 'Rahul', family: 'Gopinath' }, { given: 'Marcel', family: 'Böhme' }, { given: 'Gordon', family: 'Fraser' }, { given: 'Christian', family: 'Holler' } ],
      version: '1.2.2',
      medium: 'Online',
      publisher: 'CISPA Helmholtz-Zentrum für Informationssicherheit',
      issued: { 'date-parts': [ [ 2024, 11, 10 ] ] },
      note: 'Continuously updated online textbook; version and date identify the latest numbered release.',
      language: 'en',
      URL: 'https://www.fuzzingbook.org/',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        subtitle: 'Tools and Techniques for Generating Software Tests',
        URL: [
          {
            link: 'https://www.fuzzingbook.org/html/ReleaseNotes.html',
            display_text: 'Release notes',
            note: 'Version 1.2.2 (2024-11-10)',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
