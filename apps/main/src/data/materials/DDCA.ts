import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [ 'DDCA' ],
    material: {
      type: 'book',
      title: 'Digital Design and Computer Architecture',
      author: [ { given: 'David Money', family: 'Harris' }, { given: 'Sarah L.', family: 'Harris' } ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Morgan Kaufmann',
      issued: { 'date-parts': [ [ 2012, 8, 24 ] ] },
      ISBN: '9780123978165',
      language: 'en',
      URL: 'https://shop.elsevier.com/books/digital-design-and-computer-architecture/harris/978-0-12-394424-5',
      accessed: { 'date-parts': [ [ 2026, 11, 21 ] ] },
      custom: {
        URL: [
          { link: 'https://pages.hmc.edu/harris/ddca/ddca2e/DDCA2e_Errata.pdf' }, // Full author names.
        ],
        free_material: [ { link: 'https://pages.hmc.edu/harris/ddca/ddca2e.html', display_text: 'Companion Resources' } ],
        variant: [ { type: 'book', medium: 'Paperback', ISBN: '9780123944245' } ],
      },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
