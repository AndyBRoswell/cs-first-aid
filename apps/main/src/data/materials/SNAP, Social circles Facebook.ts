import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'SNAP Facebook', 'ego-Facebook' ],
    material: {
      type: 'dataset',
      title: 'Social circles: Facebook',
      author: [ { given: 'Julian', family: 'McAuley' }, { given: 'Jure', family: 'Leskovec' } ],
      'collection-title': 'Stanford Large Network Dataset Collection',
      medium: 'Text edge lists and node features',
      language: 'en',
      URL: 'https://snap.stanford.edu/data/ego-Facebook.html',
      accessed: { 'date-parts': [ [ 2026, 11, 2 ] ] },
      custom: {
        URL: [
          { link: 'https://cseweb.ucsd.edu/~jmcauley/datasets.html', display_text: 'Dataset creator’s information page: Social Circles' },
        ],
        free_material: [
          { link: 'https://snap.stanford.edu/data/facebook.tar.gz', display_text: '10 ego networks, circles and node features (TAR.GZ)', 'Content-Type': 'application/gzip' },
          { link: 'https://snap.stanford.edu/data/facebook_combined.txt.gz', display_text: 'Combined graph edge list (GZIP)', 'Content-Type': 'application/gzip' },
          { link: 'https://snap.stanford.edu/data/readme-Ego.txt', display_text: 'File format documentation', 'Content-Type': 'text/plain' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
