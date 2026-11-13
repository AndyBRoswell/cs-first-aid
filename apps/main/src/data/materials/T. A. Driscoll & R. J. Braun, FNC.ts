import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

// Prefer the freely available online edition; keep publication metadata with the SIAM variants.
export const entries = [
  {
    id: [ 'FNC' ],
    material: {
      type: 'book',
      title: 'Fundamentals of Numerical Computation',
      author: [
        { given: 'Tobin A.', family: 'Driscoll' },
        { given: 'Richard J.', family: 'Braun' },
      ],
      medium: 'Online',
      language: 'en',
      URL: 'https://fncbook.com/',
      accessed: { 'date-parts': [ [ 2026, 11, 13 ] ] },
      custom: {
        URL: [
          {
            link: 'https://fncbook.com/usage/',
            'Content-Type': 'text/html',
            accessed: { 'date-parts': [ [ 2026, 11, 13 ] ] },
          }, // Relationship to the print editions and differences in online content and exercise numbering.
        ],
        free_material: [
          {
            link: 'https://fncbook.com/julia/',
            display_text: 'Julia (HTML)',
            'Content-Type': 'text/html',
            accessed: { 'date-parts': [ [ 2026, 11, 13 ] ] },
          },
          {
            link: 'https://fncbook.com/matlab/',
            display_text: 'MATLAB (HTML)',
            'Content-Type': 'text/html',
            accessed: { 'date-parts': [ [ 2026, 11, 13 ] ] },
          },
          {
            link: 'https://fncbook.com/python/',
            display_text: 'Python (HTML)',
            'Content-Type': 'text/html',
            accessed: { 'date-parts': [ [ 2026, 11, 13 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            title: 'Fundamentals of Numerical Computation: Julia Edition',
            medium: 'Hardcover',
            publisher: 'Society for Industrial and Applied Mathematics',
            'publisher-place': 'Philadelphia, PA',
            'collection-title': 'Other Titles in Applied Mathematics',
            issued: { 'date-parts': [ [ 2022 ] ] },
            'number-of-pages': 614,
            ISBN: '978-1-61197-700-4',
            DOI: '10.1137/1.9781611977011',
            URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611977011',
          },
          {
            type: 'book',
            medium: 'Hardcover',
            publisher: 'Society for Industrial and Applied Mathematics',
            'publisher-place': 'Philadelphia, PA',
            'collection-title': 'Other Titles in Applied Mathematics',
            issued: { 'date-parts': [ [ 2017 ] ] },
            'number-of-pages': 'xxx + 553',
            ISBN: '978-1-61197-507-9',
            DOI: '10.1137/1.9781611975086',
            URL: 'https://epubs.siam.org/doi/book/10.1137/1.9781611975086',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
