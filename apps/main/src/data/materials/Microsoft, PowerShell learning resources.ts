import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'PowerShell learning resources',
      author: [ { literal: 'Microsoft' } ],
      'container-title': 'Microsoft Learn',
      language: 'en-US',
      URL: 'https://learn.microsoft.com/en-us/powershell/scripting/learn/more-powershell-learning',
      accessed: { 'date-parts': [ [ 2026, 9, 28 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
