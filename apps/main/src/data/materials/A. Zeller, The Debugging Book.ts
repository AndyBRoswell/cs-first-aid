import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Debugging Book',
      author: [ { given: 'Andreas', family: 'Zeller' } ],
      version: '1.3.2',
      medium: 'Online',
      publisher: 'CISPA Helmholtz Center for Information Security',
      issued: { 'date-parts': [ [ 2025, 1, 16 ] ] },
      note: 'Continuously updated online textbook; version and date identify the latest numbered release.',
      language: 'en',
      URL: 'https://www.debuggingbook.org/',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        subtitle: 'Tools and Techniques for Automated Software Debugging',
        URL: [
          {
            link: 'https://www.debuggingbook.org/html/ReleaseNotes.html',
            display_text: 'Release notes',
            note: 'Version 1.3.2 (2025-01-16)',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
