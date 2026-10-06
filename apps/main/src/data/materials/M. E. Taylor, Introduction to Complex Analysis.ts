import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Michael E.', family: 'Taylor' } ],
      title: 'Introduction to Complex Analysis',
      medium: 'Author PDF',
      language: 'en-US',
      URL: 'https://mtaylor.web.unc.edu/notes/complex-analysis-course/',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        free_material: [
          { link: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/complex.pdf', display_text: 'Author PDF', 'Content-Type': 'application/pdf' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            publisher: 'American Mathematical Society',
            'publisher-place': 'Providence, RI',
            'collection-title': 'Graduate Studies in Mathematics',
            'collection-number': 202,
            issued: { 'date-parts': [ [ 2019 ] ] },
            ISBN: '978-1-4704-5286-5',
            ISSN: '1065-7339',
            URL: 'https://www.ams.org/books/gsm/202/gsm202-endmatter.pdf',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
