import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [
      'T. W. Judson, AATA',
    ],
    material: {
      type: 'book',
      title: 'Abstract Algebra: Theory and Applications',
      author: [ { given: 'Thomas W.', family: 'Judson' } ],
      language: 'en-US',
      publisher: 'Orthogonal Publishing L3C',
      issued: { 'date-parts': [ [ 2025, 8, 1 ] ] },
      URL: 'https://judsonbooks.org/abstract-algebra-theory-and-applications/',
      accessed: { 'date-parts': [ [ 2026, 8, 29 ] ] },
      custom: {
        free_material: [
          { link: 'https://judsonbooks.org/aata-files/aata-html/aata.html', display_text: 'HTML Edition', },
          { link: 'https://judsonbooks.org/aata-files/aata-20250801.pdf', display_text: 'PDF (2025 edition)', 'Content-Type': 'application/pdf', },
          { link: 'https://github.com/twjudson/aata', display_text: 'GitHub Repository', },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            title: 'Abstract Algebra: Theory and Applications',
            author: [ { given: 'Thomas W.', family: 'Judson' } ],
            language: 'en-US',
            edition: 2026,
            publisher: 'Orthogonal Publishing L3C',
            issued: { 'date-parts': [ [ 2026, 8, 1 ] ] },
            ISBN: '978-1-944325-21-3',
          },
          {
            type: 'book',
            medium: 'Hardcover',
            title: 'Abstract Algebra: Theory and Applications',
            author: [ { given: 'Thomas W.', family: 'Judson' } ],
            language: 'en-US',
            edition: 2026,
            publisher: 'Orthogonal Publishing L3C',
            issued: { 'date-parts': [ [ 2026, 8, 1 ] ] },
            ISBN: '978-1-944325-22-0',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
