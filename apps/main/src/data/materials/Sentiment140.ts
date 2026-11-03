import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'Sentiment140' ],
    material: {
      type: 'dataset',
      title: 'Sentiment140',
      author: [ { given: 'Alec', family: 'Go' }, { given: 'Richa', family: 'Bhayani' }, { given: 'Lei', family: 'Huang' } ],
      medium: 'CSV',
      language: 'en',
      URL: 'https://www.kaggle.com/datasets/kazanova/sentiment140',
      accessed: { 'date-parts': [ [ 2026, 11, 2 ] ] },
      custom: {
        URL: [
          { link: 'https://cs.stanford.edu/people/alecmgo/papers/TwitterDistantSupervision09.pdf', display_text: 'Original paper: Twitter Sentiment Classification using Distant Supervision', 'Content-Type': 'application/pdf' },
          { link: 'https://www.kaggle.com/api/v1/datasets/view/kazanova/sentiment140', display_text: 'Kaggle mirror metadata (JSON)', 'Content-Type': 'application/json' },
        ],
        free_material: [
          { link: 'https://cs.stanford.edu/people/alecmgo/trainingandtestdata.zip', display_text: 'Original training and test data (CSV, ZIP)', 'Content-Type': 'application/zip' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
