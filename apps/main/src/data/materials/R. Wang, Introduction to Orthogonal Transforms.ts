import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Ruye', family: 'Wang' } ],
      title: 'Introduction to Orthogonal Transforms',
      medium: 'Hardback',
      publisher: 'Cambridge University Press',
      issued: { 'date-parts': [ [ 2012, 3, 8 ] ] },
      'number-of-pages': 590,
      ISBN: '9780521516884',
      language: 'en-US',
      URL: 'https://www.cambridge.org/core/books/introduction-to-orthogonal-transforms/AC53D86D32426DE0963362F7B20D908D',
      accessed: { 'date-parts': [ [ 2026, 10, 6 ] ] },
      custom: {
        'subtitle': 'With Applications in Data Processing and Analysis',
        subjects: [ 'Communications and Signal Processing', 'Engineering', 'Engineering Mathematics and Programming' ],
        URL: [
          {
            link: 'https://assets.cambridge.org/97805215/16884/toc/9780521516884_toc.pdf',
            display_text: 'Publisher table of contents',
            'Content-Type': 'application/pdf',
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            issued: { 'date-parts': [ [ 2012, 10, 5 ] ] },
            DOI: '10.1017/CBO9781139015158',
            ISBN: '9781139015158',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
