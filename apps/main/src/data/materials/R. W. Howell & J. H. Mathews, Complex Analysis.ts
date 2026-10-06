import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Russell W.', family: 'Howell' }, { given: 'John H.', family: 'Mathews' } ],
      title: 'Complex Analysis',
      medium: 'Online and PDF',
      issued: { 'date-parts': [ [ 2025 ] ] },
      language: 'en-US',
      URL: 'https://complexanalysis.org/',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        free_material: [
          { link: 'https://complexanalysis.org/web/root-1-2-2.html', display_text: 'HTML', 'Content-Type': 'text/html', license: 'CC-BY-4.0', modified: { 'date-parts': [ [ 2025, 8, 22 ] ] } },
          { link: 'https://complexanalysis.org/howell-complex-analysis-web.pdf', display_text: 'PDF', 'Content-Type': 'application/pdf', license: 'CC-BY-4.0' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
