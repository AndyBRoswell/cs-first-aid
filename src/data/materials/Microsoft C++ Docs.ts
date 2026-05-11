import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'mscppref',
      'Microsoft, C++ Language Reference, 2025',
      { unordered_author: 'Microsoft', title: 'C++ Language Reference' },
      { unordered_author: 'Microsoft', title: 'C++ Language Reference', date: 2025 },
    ],
    material: {
      type: 'webpage',
      id: 'Microsoft, C++ Language Reference, 2025',
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
      } satisfies CSL_Data.Custom,
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)