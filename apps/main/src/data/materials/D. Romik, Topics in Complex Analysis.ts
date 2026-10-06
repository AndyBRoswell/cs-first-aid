import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Dan', family: 'Romik' } ],
      title: 'Topics in Complex Analysis',
      medium: 'eBook (PDF)',
      publisher: 'De Gruyter',
      'publisher-place': 'Berlin/Boston',
      'collection-title': 'De Gruyter Textbook',
      issued: { 'date-parts': [ [ 2023, 8, 21 ] ] },
      'number-of-pages': 'XII, 296',
      DOI: '10.1515/9783110796810',
      ISBN: '978-3-11-079681-0',
      language: 'en-US',
      URL: 'https://doi.org/10.1515/9783110796810',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://www.degruyterbrill.com/document/doi/10.1515/9783110796810/html',
            display_text: 'Publisher open access (PDF/EPUB)',
            'Content-Type': 'text/html',
            license: 'CC-BY-NC-ND-4.0'
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook (EPUB)',
            ISBN: '9783110796810',
            URL: 'https://doi.org/10.1515/9783110796810',
          },
          {
            type: 'book',
            medium: 'Paperback',
            issued: { 'date-parts': [ [ 2023, 8, 21 ] ] },
            ISBN: '978-3-11-079678-0',
            URL: 'https://doi.org/10.1515/9783110796810',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
