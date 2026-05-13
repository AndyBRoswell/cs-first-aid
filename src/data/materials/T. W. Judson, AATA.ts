import * as catalog from './catalog.ts'
import * as Data_Type from '@/types/data.ts'
import * as CSL_Data from '@/types/CSL_data.ts'

const items = [
  {
    id: [
      'T. W. Judson, AATA',
      'T. W. Judson, Abstract Algebra: Theory and Applications',
      { unordered_author: 'T. W. Judson', title: 'Abstract Algebra: Theory and Applications', },
    ],
    material: {
      type: 'book',
      id: 'T. W. Judson, Abstract Algebra: Theory and Applications, 2025',
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
          id: '[Paperback] T. W. Judson, Abstract Algebra: Theory and Applications',
          title: 'Abstract Algebra: Theory and Applications',
          author: [ { given: 'Thomas W.', family: 'Judson' } ],
          language: 'en-US',
          edition: 2023,
          publisher: 'Orthogonal Publishing L3C',
          issued: { 'date-parts': [ [ 2026, 5, 13 ] ] },
          ISBN: '9781944325183' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
        Hardcover: {
          type: 'book',
          id: '[Hardcover] T. W. Judson, Abstract Algebra: Theory and Applications, 2023 ed.',
          title: 'Abstract Algebra: Theory and Applications',
          author: [ { given: 'Thomas W.', family: 'Judson' } ],
          language: 'en-US',
          edition: 2023,
          publisher: 'Orthogonal Publishing L3C',
          issued: { 'date-parts': [ [ 2023 ] ] },
          ISBN: '9781944325190' as CSL_Data.ISBN,
        } satisfies Data_Type.Material,
      } satisfies CSL_Data.Custom,
    },
  },
] satisfies Data_Type.Entry[]

catalog.add_items(items)