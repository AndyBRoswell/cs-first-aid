import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Software Engineering at Google',
      author: [ { given: 'Titus', family: 'Winters' }, { given: 'Tom', family: 'Manshreck' }, { given: 'Hyrum', family: 'Wright' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'O’Reilly Media',
      issued: { 'date-parts': [ [ 2020, 3 ] ] },
      ISBN: '9781492082781',
      'number-of-pages': 602,
      language: 'en',
      URL: 'https://www.oreilly.com/library/view/software-engineering-at/9781492082781/',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        subtitle: 'Lessons Learned from Programming Over Time',
        URL: [
          {
            link: 'https://abseil.io/resources/swe-book',
            display_text: 'Abseil',
          },
        ],
        free_material: [
          {
            link: 'https://abseil.io/resources/swe-book/html/toc.html',
            display_text: 'HTML',
            'Content-Type': 'text/html',
            license: 'CC-BY-NC-ND-4.0',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
