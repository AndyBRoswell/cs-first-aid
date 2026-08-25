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
      accessed: { 'date-parts': [ [ 2026, 5, 13 ] ] },
      custom: {
        free_material: [
          { link: 'https://judsonbooks.org/aata-files/aata-html/aata.html', display_text: 'HTML Edition', },
          { link: 'https://judsonbooks.org/abstract-algebra-theory-and-applications/', display_text: 'Downloads (PDF)', },
          { link: 'https://github.com/twjudson/aata', display_text: 'GitHub Repository', },
        ],
        Paperback: {
          type: 'book',
          title: 'Abstract Algebra: Theory and Applications',
          author: [ { given: 'Thomas W.', family: 'Judson' } ],
          language: 'en-US',
          edition: 2023,
          publisher: 'Orthogonal Publishing L3C',
          issued: { 'date-parts': [ [ 2026, 5, 13 ] ] },
          ISBN: '9781944325183',
        } satisfies types_data.Material,
        Hardcover: {
          type: 'book',
          title: 'Abstract Algebra: Theory and Applications',
          author: [ { given: 'Thomas W.', family: 'Judson' } ],
          language: 'en-US',
          edition: 2023,
          publisher: 'Orthogonal Publishing L3C',
          issued: { 'date-parts': [ [ 2023 ] ] },
          ISBN: '9781944325190',
        } satisfies types_data.Material,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
