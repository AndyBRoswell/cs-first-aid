import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'Twitter US Airline Sentiment' ],
    material: {
      type: 'dataset',
      title: 'Twitter US Airline Sentiment',
      author: [ { literal: 'CrowdFlower' } ],
      publisher: 'Figure Eight',
      version: '4',
      issued: { 'date-parts': [ [ 2019, 10, 16 ] ] },
      medium: 'CSV and SQLite',
      language: 'en',
      URL: 'https://www.kaggle.com/datasets/crowdflower/twitter-airline-sentiment',
      accessed: { 'date-parts': [ [ 2026, 11, 3 ] ] },
      custom: {
        URL: [
          { link: 'https://www.kaggle.com/api/v1/datasets/view/crowdflower/twitter-airline-sentiment', display_text: 'Kaggle dataset metadata (JSON)', 'Content-Type': 'application/json' }, // issued, modified, version
          { link: 'https://github.com/benhamner/crowdflower-airline-twitter-sentiment', display_text: 'Source conversion scripts' },
        ],
        free_material: [
          { link: 'https://www.kaggle.com/api/v1/datasets/download/crowdflower/twitter-airline-sentiment', display_text: 'Dataset files (CSV and SQLite, ZIP)', 'Content-Type': 'application/zip', license: 'CC-BY-NC-SA-4.0', modified: { 'date-parts': [ [ 2019, 10, 16 ] ] } },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
