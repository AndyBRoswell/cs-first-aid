import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Channel Codes',
      author: [ { given: 'William E.', family: 'Ryan' }, { given: 'Shu', family: 'Lin' }, { given: 'Stephen G.', family: 'Wilson' } ],
      edition: 2,
      medium: 'Hardback',
      publisher: 'Cambridge University Press',
      'publisher-place': 'Cambridge, United Kingdom',
      issued: { 'date-parts': [ [ 2024, 11, 21 ] ] },
      ISBN: '9781009335904',
      DOI: '10.1017/9781009335928',
      'number-of-pages': 790,
      language: 'en',
      URL: 'https://www.cambridge.org/highereducation/books/channel-codes/8943131B6E230FC71D6A96BBF2A38F04',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        subtitle: 'Classical and Modern',
        subject: [ 'Communications and Signal Processing', 'Discrete Mathematics, Information Theory and Coding', 'Engineering', 'Mathematics' ],
        URL: [
          {
            link: 'https://www.cambridge.org/9781009335904',
            display_text: 'Cambridge University Press',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://assets.cambridge.org/97810093/35904/frontmatter/9781009335904_frontmatter.pdf',
            display_text: 'frontmatter',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://assets.cambridge.org/97810093/35904/index/9781009335904_index.pdf',
            display_text: 'index',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9781009335928',
            issued: { 'date-parts': [ [ 2025, 3, 6 ] ] },
            URL: 'https://www.cambridge.org/highereducation/books/channel-codes/8943131B6E230FC71D6A96BBF2A38F04',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
