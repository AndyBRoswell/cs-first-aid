import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Elements of Statistical Learning',
      author: [
        { given: 'Trevor', family: 'Hastie' },
        { given: 'Robert', family: 'Tibshirani' },
        { given: 'Jerome', family: 'Friedman' },
      ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Springer New York, NY',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2009, 8, 26 ] ] },
      ISBN: '978-0-387-84858-7',
      DOI: '10.1007/978-0-387-84858-7',
      'collection-title': 'Springer Series in Statistics',
      ISSN: '2197-568X',
      'number-of-pages': 'XXII, 745',
      language: 'en-US',
      URL: 'https://link.springer.com/book/10.1007/978-0-387-84858-7',
      accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
      custom: {
        subtitle: 'Data Mining, Inference, and Prediction',
        'collection-title-short': 'SSS',
        keyword: [ 'Averaging', 'Boosting', 'Projection pursuit', 'Random Forest', 'Support Vector Machine', 'classification', 'clustering', 'data mining', 'machine learning', 'supervised learning', 'unsupervised learning' ],
        topic: [ 'Artificial Intelligence', 'Data Mining and Knowledge Discovery', 'Probability Theory and Stochastic Processes', 'Statistical Theory and Methods', 'Computational Biology/Bioinformatics', 'Computer Appl. in Life Sciences' ],
        'eBook packages': [ 'Mathematics and Statistics', 'Mathematics and Statistics (R0)' ],
        URL: [
          {
            link: 'https://hastie.su.domains/ElemStatLearn/main.html',
            display_text: 'ESL',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        free_material: [
          {
            link: 'https://hastie.su.domains/ElemStatLearn/printings/ESLII_print12_toc.pdf.download.html',
            display_text: 'PDF',
            'Content-Type': 'text/html',
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-0-387-84857-0',
            ISSN: '0172-7397',
            issued: { 'date-parts': [ [ 2009, 2, 9 ] ] },
            accessed: { 'date-parts': [ [ 2026, 10, 17 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
