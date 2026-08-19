import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const papers = [
  {
    id: [],
    material: {
      type: 'paper-conference',
      title: 'Optimal Rendering for Colour Matrix Displays',
      author: [ { given: 'Louis J.', family: 'Kerofsky' }, { given: 'Dean S.', family: 'Messing' } ],
      event: 'Americas Display Engineering & Applications Conference (ADEAC)',
      language: 'en-US',
      issued: { 'date-parts': [ [ 2005, 1 ] ] },
      URL: 'https://www.researchgate.net/publication/295905125',
      accessed: { 'date-parts': [ [ 2026, 8, 19 ] ] },
      custom: {
        Figure: {
          link: 'https://www.researchgate.net/figure/a-Seven-subpixel-configurations-traditional-1D-RGB-stripe-three-different-proposed_fig1_295905125',
        } satisfies types_data.Link,
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

catalog.add_items(papers)