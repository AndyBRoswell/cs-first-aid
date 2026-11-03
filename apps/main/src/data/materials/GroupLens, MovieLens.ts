import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'MovieLens' ],
    material: {
      type: 'dataset',
      title: 'MovieLens',
      author: [ { literal: 'GroupLens Research' } ],
      publisher: 'GroupLens Research',
      medium: 'CSV and text',
      language: 'en',
      URL: 'https://grouplens.org/datasets/movielens/',
      accessed: { 'date-parts': [ [ 2026, 11, 3 ] ] },
      custom: {
        institution: [ 'University of Minnesota' ],
        URL: [
          { link: 'https://grouplens.org/datasets/movielens/32m/', display_text: 'MovieLens 32M information page' }, // issued
          { link: 'https://grouplens.org/datasets/movielens/20m/', display_text: 'MovieLens 20M information page' }, // modified
        ],
        free_material: {
          'MovieLens 32M': [
            { link: 'https://files.grouplens.org/datasets/movielens/ml-32m.zip', display_text: 'Dataset (CSV, ZIP)', 'Content-Type': 'application/zip', license: 'GroupLens research-use terms; commercial use requires permission', created: { 'date-parts': [ [ 2023, 10, 13 ] ] }, issued: { 'date-parts': [ [ 2024, 5 ] ] } },
            { link: 'https://files.grouplens.org/datasets/movielens/ml-32m-README.html', display_text: 'Data dictionary, usage terms and citation instructions' }, // created
          ],
          'MovieLens 20M': [
            { link: 'https://files.grouplens.org/datasets/movielens/ml-20m.zip', display_text: 'Dataset (CSV, ZIP)', 'Content-Type': 'application/zip', license: 'GroupLens research-use terms; commercial use requires permission', created: { 'date-parts': [ [ 2016, 10, 17 ] ] }, modified: { 'date-parts': [ [ 2016, 10 ] ] } },
            { link: 'https://files.grouplens.org/datasets/movielens/ml-20m-README.html', display_text: 'Data dictionary, usage terms and citation instructions' }, // created
          ],
          'MovieLens 100K': [
            { link: 'https://files.grouplens.org/datasets/movielens/ml-100k.zip', display_text: 'Dataset (text, ZIP)', 'Content-Type': 'application/zip', license: 'GroupLens research-use terms; commercial use requires permission' },
            { link: 'https://files.grouplens.org/datasets/movielens/ml-100k-README.txt', display_text: 'Data dictionary, usage terms and citation instructions', 'Content-Type': 'text/plain' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
