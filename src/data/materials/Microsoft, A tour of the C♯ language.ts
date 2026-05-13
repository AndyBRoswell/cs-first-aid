import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'

const items = [
  {
    id: [
      'Microsoft, A tour of the C# language',
      'Microsoft, "A tour of the C# language," 2026',
      { unordered_author: 'Microsoft', title: 'A tour of the C# language' },
    ],
    material: {
      type: 'webpage',
      id: 'Microsoft, "A tour of the C# language," 2026',
      language: 'en-US',
      author: [ { literal: 'Microsoft' } ],
      issued: { 'date-parts': [ [ 2026, 2, 23 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      title: 'A tour of the C# language',
      URL: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview',
      publisher: 'Microsoft',
    } satisfies Data_Type.Material,
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)