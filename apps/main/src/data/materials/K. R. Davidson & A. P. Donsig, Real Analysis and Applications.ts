import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Kenneth R.', family: 'Davidson' }, { given: 'Allan P.', family: 'Donsig' } ],
      title: 'Real Analysis and Applications',
      edition: 1,
      medium: 'eBook',
      publisher: 'Springer',
      'publisher-place': 'New York, NY',
      'collection-title': 'Undergraduate Texts in Mathematics',
      'collection-editor': [ { given: 'Sheldon Jay', family: 'Axler' }, { given: 'Kenneth Alan', family: 'Ribet' } ],
      issued: { 'date-parts': [ [ 2009, 10, 13 ] ] },
      'number-of-pages': 'XII, 513',
      DOI: '10.1007/978-0-387-98098-0',
      ISBN: '978-0-387-98098-0',
      ISSN: '2197-5604',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-0-387-98098-0',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        subtitle: 'Theory in Practice',
        'collection-title-short': 'UTM',
        keyword: [ 'analysis', 'applications', 'real analysis', 'calculus', 'linear algebra', 'linear optimization', 'nonlinear optimization', 'optimization' ],
        topic: [ 'Real Functions', 'Analysis', 'Applications of Mathematics' ],
        'eBook packages': [ 'Mathematics and Statistics', 'Mathematics and Statistics (R0)' ],
        URL: [
          { link: 'https://www.math.uwaterloo.ca/~krdavids/RAA/real.html', display_text: 'Kenneth R. Davidson' },
          { link: 'https://link.springer.com/content/pdf/bfm:978-0-387-98098-0/1', display_text: 'Springer' },
        ],
        variant: [
          {
            type: 'book', medium: 'Hardcover', ISBN: '978-0-387-98097-3', ISSN: '0172-6056',
            issued: { 'date-parts': [ [ 2009, 10, 28 ] ] }, 'number-of-pages': 'XII, 513',
            URL: 'https://link.springer.com/book/10.1007/978-0-387-98098-0',
          },
          {
            type: 'book', medium: 'Softcover', ISBN: '978-1-4614-9900-8', ISSN: '0172-6056',
            issued: { 'date-parts': [ [ 2014, 10, 20 ] ] }, 'number-of-pages': 'XII, 513',
            URL: 'https://link.springer.com/book/10.1007/978-0-387-98098-0',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
