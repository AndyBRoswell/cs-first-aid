import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'article-journal',
      title: 'An Investigation of the Therac-25 Accidents',
      author: [ { given: 'Nancy G.', family: 'Leveson' }, { given: 'Clark S.', family: 'Turner' } ],
      'container-title': 'Computer',
      publisher: 'IEEE',
      issued: { 'date-parts': [ [ 1993, 7 ] ] },
      volume: 26,
      issue: 7,
      page: '18-41',
      'number-of-pages': 24,
      DOI: '10.1109/MC.1993.274940',
      language: 'en',
      URL: 'https://ieeexplore.ieee.org/document/274940',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        free_material: [
          {
            link: 'https://web.mit.edu/6.033/2004/wwwdocs/papers/Therac_1.html',
            display_text: 'MIT HTML: Part I',
            'Content-Type': 'text/html',
          },
          {
            link: 'https://web.mit.edu/6.033/2004/wwwdocs/papers/Therac_2.html',
            display_text: 'MIT HTML: Part II',
            'Content-Type': 'text/html',
          },
          {
            link: 'https://web.mit.edu/6.033/2004/wwwdocs/papers/Therac_3.html',
            display_text: 'MIT HTML: Part III',
            'Content-Type': 'text/html',
          },
          {
            link: 'https://web.mit.edu/6.033/2004/wwwdocs/papers/Therac_4.html',
            display_text: 'MIT HTML: Part IV',
            'Content-Type': 'text/html',
          },
          {
            link: 'https://web.mit.edu/6.033/2004/wwwdocs/papers/Therac_5.html',
            display_text: 'MIT HTML: Part V',
            'Content-Type': 'text/html',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
