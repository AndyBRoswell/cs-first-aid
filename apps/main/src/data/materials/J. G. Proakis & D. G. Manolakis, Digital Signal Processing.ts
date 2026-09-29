import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Digital Signal Processing: Principles, Algorithms and Applications',
      author: [ { given: 'John G.', family: 'Proakis' }, { given: 'Dimitris G.', family: 'Manolakis' } ],
      edition: 5,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2021, 2, 19 ] ] },
      ISBN: '9780137348244',
      'number-of-pages': 1168,
      language: 'en-US',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/digital-signal-processing-principles-algorithms-and-applications/P200000003415',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
