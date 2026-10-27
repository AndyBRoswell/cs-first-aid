import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'Comparison of document markup languages',
      author: [ { literal: 'Wikipedia contributors' } ],
      'container-title': 'Wikipedia',
      language: 'en',
      URL: 'https://en.wikipedia.org/wiki/Comparison_of_document_markup_languages',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
