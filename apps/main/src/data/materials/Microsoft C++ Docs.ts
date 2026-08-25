import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const items = [
  {
    id: [
      'mscppref',
    ],
    material: {
      type: 'webpage',
      author: [ { literal: 'Microsoft' } ],
      title: 'C++ Language Reference',
      language: 'en-US',
      URL: 'https://learn.microsoft.com/en-us/cpp/cpp/cpp-language-reference',
      issued: { 'date-parts': [ [ 2025, 5, 28 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 12 ] ] },
      publisher: 'Microsoft',
      version: 'msvc-170',
      custom: {
        URL: [
          {
            link: 'https://github.com/MicrosoftDocs/cpp-docs/blob/main/docs/cpp/cpp-language-reference.md',
            display_text: 'cpp-language-reference.md · MicrosoftDocs/cpp-docs',
            tag: [ 'GitHub', 'source' ],
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

export { items as entries }