import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'An Introduction to Statistical Learning',
      author: [
        { given: 'Gareth', family: 'James' },
        { given: 'Daniela', family: 'Witten' },
        { given: 'Trevor', family: 'Hastie' },
        { given: 'Robert', family: 'Tibshirani' },
        { given: 'Jonathan', family: 'Taylor' },
      ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Springer Cham',
      'publisher-place': 'Cham',
      issued: { 'date-parts': [ [ 2023, 6, 30 ] ] },
      ISBN: '978-3-031-38747-0',
      DOI: '10.1007/978-3-031-38747-0',
      'collection-title': 'Springer Texts in Statistics',
      ISSN: '2197-4136',
      'number-of-pages': 'XV, 607',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-3-031-38747-0',
      accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
      custom: {
        subtitle: 'with Applications in Python',
        'collection-title-short': 'STS',
        keyword: [ 'Python', 'Python software', 'data mining', 'inference', 'statistical learning', 'supervised learning', 'unsupervised learning' ],
        topic: [ 'Statistical Theory and Methods', 'Statistics and Computing/Statistics Programs', 'Applied Statistics' ],
        'eBook packages': [ 'Mathematics and Statistics', 'Mathematics and Statistics (R0)' ],
        URL: [
          {
            link: 'https://www.statlearning.com/',
            display_text: 'StatLearning',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
          {
            link: 'https://www.statlearning.com/resources-python',
            display_text: 'ISLP',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://hastie.su.domains/ISLP/ISLP_website.pdf.download.html',
            display_text: 'PDF',
            'Content-Type': 'text/html',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-3-031-38746-3',
            ISSN: '1431-875X',
            issued: { 'date-parts': [ [ 2023, 7, 1 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-3-031-39189-7',
            ISSN: '1431-875X',
            issued: { 'date-parts': [ [ 2024, 7, 2 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'An Introduction to Statistical Learning',
      author: [
        { given: 'Gareth', family: 'James' },
        { given: 'Daniela', family: 'Witten' },
        { given: 'Trevor', family: 'Hastie' },
        { given: 'Robert', family: 'Tibshirani' },
      ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Springer New York, NY',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2021, 7, 29 ] ] },
      ISBN: '978-1-0716-1418-1',
      DOI: '10.1007/978-1-0716-1418-1',
      'collection-title': 'Springer Texts in Statistics',
      ISSN: '2197-4136',
      'number-of-pages': 'XV, 607',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-1-0716-1418-1',
      accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
      custom: {
        subtitle: 'with Applications in R',
        'collection-title-short': 'STS',
        keyword: [ 'R', 'R software', 'data mining', 'inference', 'statistical learning', 'supervised learning', 'unsupervised learning' ],
        topic: [ 'Statistical Theory and Methods', 'Statistics and Computing/Statistics Programs', 'Artificial Intelligence', 'Statistics, general' ],
        'eBook packages': [ 'Mathematics and Statistics', 'Mathematics and Statistics (R0)' ],
        URL: [
          {
            link: 'https://www.statlearning.com/',
            display_text: 'StatLearning',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
          {
            link: 'https://www.statlearning.com/resources-second-edition',
            display_text: 'ISLR',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://hastie.su.domains/ISLR2/ISLRv2_corrected_June_2023.pdf.download.html',
            display_text: 'PDF',
            'Content-Type': 'text/html',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-1-0716-1417-4',
            ISSN: '1431-875X',
            issued: { 'date-parts': [ [ 2021, 7, 30 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '978-1-0716-1420-4',
            ISSN: '1431-875X',
            issued: { 'date-parts': [ [ 2022, 7, 30 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
