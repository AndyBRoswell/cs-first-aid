import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [
    ],
    material: {
      type: 'webpage',
      language: 'en-US',
      author: [ { literal: 'Microsoft' } ],
      issued: { 'date-parts': [ [ 2026, 2, 23 ] ] },
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      title: 'A tour of the C# language',
      URL: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview',
      publisher: 'Microsoft',
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]