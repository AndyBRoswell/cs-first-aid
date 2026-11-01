import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Algorithmic Foundations of Differential Privacy',
      author: [ { given: 'Cynthia', family: 'Dwork' }, { given: 'Aaron', family: 'Roth' } ],
      medium: 'eBook',
      publisher: 'now Publishers',
      issued: { 'date-parts': [ [ 2014, 8, 11 ] ] },
      ISBN: '9781601988195',
      DOI: '10.1561/0400000042',
      'collection-title': 'Foundations and Trends in Theoretical Computer Science',
      'number-of-pages': 286,
      language: 'en',
      URL: 'https://www.cis.upenn.edu/~aaroth/privacybook.html',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        URL: [
          { link: 'https://www.nowpublishers.com/article/Details/TCS-042', display_text: 'Publisher' },
        ],
        free_material: [
          { link: 'https://www.cis.upenn.edu/~aaroth/Papers/privacybook.pdf', display_text: 'Author-hosted PDF', 'Content-Type': 'application/pdf', note: 'Pagination differs from the published book.' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
