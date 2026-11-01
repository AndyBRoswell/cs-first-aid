import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Windows Presentation Foundation documentation',
      author: [ { literal: 'Microsoft' } ],
      'container-title': 'Microsoft Learn',
      language: 'en-US',
      URL: 'https://learn.microsoft.com/en-us/dotnet/desktop/wpf/',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
