import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'William F.', family: 'Trench' } ],
      title: 'Introduction to Real Analysis',
      version: '2.04',
      issued: { 'date-parts': [ [ 2013, 12 ] ] },
      'number-of-pages': 'viii, 577',
      language: 'en-US',
      ISBN: '0-13-045786-8',
      URL: 'https://digitalcommons.trinity.edu/mono/7/',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        edition: 'Free Hyperlinked Edition',
        free_material: [
          { link: 'https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-NC-SA-3.0' },
        ],
        variant: [
          { type: 'book', publisher: 'Pearson Education', ISBN: '0-13-045786-8', issued: { 'date-parts': [ [ 2003 ] ] } },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
