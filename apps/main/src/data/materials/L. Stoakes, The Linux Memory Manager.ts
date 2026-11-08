import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Linux Memory Manager',
      author: [ { given: 'Lorenzo', family: 'Stoakes' } ],
      publisher: 'No Starch Press',
      language: 'en',
      medium: 'eBook (Early Access PDF)',
      status: 'Early Access',
      ISBN: '9781718504479', // ISBN assigned to the electronic edition; the current PDF is an Early Access draft.
      URL: 'https://nostarch.com/linux-memory-manager',
      accessed: { 'date-parts': [ [ 2026, 11, 8 ] ] },
      note: 'Targets Linux 6.0. Early Access PDF; final publication is expected in Spring 2027.',
      custom: {
        URL: [
          { link: 'https://books.google.com/books?id=SG9REQAAQBAJ', display_text: 'Google Books' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            status: 'forthcoming',
            'number-of-pages': 1350,
            ISBN: '9781718504462',
            note: 'Preorder; the publisher expects publication in Spring 2027. Pagination is provisional.',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
