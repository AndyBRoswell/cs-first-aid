import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Halsey L.', family: 'Royden' }, { given: 'Patrick M.', family: 'Fitzpatrick' } ],
      title: 'Real Analysis',
      edition: 5,
      medium: 'Paperback',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2022, 9, 29 ] ] },
      'number-of-pages': 496,
      ISBN: '9780137906529',
      language: 'en-US',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/real-analysis/P200000007113/9780137906529',
      accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
      custom: {
        URL: [
          {
            link: 'https://www.pearson.com/content/dam/one-dot-com/one-dot-com/us/en/files/Pearson-Higher-Education-Titles-Autumn-2022.pdf',
            display_text: 'Pearson-Higher-Education-Titles-Autumn-2022.pdf',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9780136853541',
            URL: 'https://www.vitalsource.com/products/real-analysis-patrick-m-fitzpatrick-halsey-v9780136853541',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
