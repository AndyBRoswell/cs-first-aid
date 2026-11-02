import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'Zachary Karate Club' ],
    material: {
      type: 'dataset',
      title: 'Zachary’s Karate Club',
      author: [ { given: 'Wayne W.', family: 'Zachary' } ],
      medium: 'Graph and GML',
      language: 'en',
      URL: 'https://networkx.org/documentation/stable/reference/generated/networkx.generators.social.karate_club_graph.html',
      accessed: { 'date-parts': [ [ 2026, 11, 2 ] ] },
      custom: {
        free_material: [
          { link: 'https://websites.umich.edu/~mejn/netdata/karate.zip', display_text: 'GML graph from Mark Newman’s collection (ZIP)', 'Content-Type': 'application/zip' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
