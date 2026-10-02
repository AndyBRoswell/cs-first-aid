import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Machine Learning',
      author: [ { given: 'Zhi-Hua', family: 'Zhou' } ],
      translator: [ { given: 'Shaowu', family: 'Liu' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Springer Singapore',
      'publisher-place': 'Singapore',
      issued: { 'date-parts': [ [ 2021, 8, 20 ] ] },
      'original-title': '机器学习',
      'original-date': { 'date-parts': [ [ 2016, 1, 1 ] ] },
      'original-publisher': '清华大学出版社',
      ISBN: '978-981-15-1967-3',
      DOI: '10.1007/978-981-15-1967-3',
      'number-of-pages': 'XIII, 459',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-981-15-1967-3',
      accessed: { 'date-parts': [ [ 2026, 10, 1 ] ] },
      custom: {
        keyword: [
          'Machine Learning',
          'Learning Algorithms',
          'Neural Networks',
          'Support Vector Machines',
          'Decision Trees',
          'Classification',
          'Clustering',
          'Supervised Learning',
          'Semi-Supervised Learning',
          'Unsupervised Learning',
          'Metric Learning',
          'Feature Selection',
          'Rule Learning',
          'Mathematical Models',
          'Reinforcement Learning',
          'Bayesian Networks',
        ],
        topic: [ 'Machine Learning', 'Data Mining and Knowledge Discovery', 'Mathematics of Computing' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-981-15-1966-6',
            issued: { 'date-parts': [ [ 2021, 8, 21 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-981-15-1969-7',
            issued: { 'date-parts': [ [ 2022, 8, 22 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
