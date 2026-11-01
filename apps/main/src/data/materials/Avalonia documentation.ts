import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Avalonia documentation',
      author: [ { literal: 'AvaloniaUI' } ],
      language: 'en',
      URL: 'https://docs.avaloniaui.net/docs/welcome',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
