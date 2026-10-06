import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Avinash C.', family: 'Kak' }, { given: 'Malcolm', family: 'Slaney' } ],
      title: 'Principles of Computerized Tomographic Imaging',
      medium: 'Softcover',
      publisher: 'Society for Industrial and Applied Mathematics',
      'collection-title': 'Classics in Applied Mathematics',
      'collection-number': 33,
      issued: { 'date-parts': [ [ 2001 ] ] },
      'number-of-pages': 'xii, 323',
      ISBN: '978-0-89871-494-4',
      language: 'en-US',
      URL: 'https://epubs.siam.org/doi/book/10.1137/1.9780898719277',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.slaney.org/pct/pct-toc.html',
            display_text: 'Author-hosted chapter PDFs (1988 original)',
            'Content-Type': 'text/html',
            license: 'Personal use only; commercial use requires permission.',
          },
        ],
        URL: [
          {
            link: 'https://www.slaney.org/pct/index.html',
            display_text: 'Author website and code',
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            DOI: '10.1137/1.9780898719277',
            ISBN: '978-0-89871-927-7',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
