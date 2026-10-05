import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Edward Barry', family: 'Saff' }, { given: 'Arthur David', family: 'Snider' } ],
      title: 'Fundamentals of Complex Analysis with Applications to Engineering, Science, and Mathematics',
      edition: 3,
      medium: 'Paperback',
      publisher: 'Pearson Education Limited',
      'publisher-place': 'Harlow',
      issued: { 'date-parts': [ [ 2013, 7, 18 ] ] },
      'number-of-pages': 520,
      ISBN: '978-1-292-02375-5',
      language: 'en-US',
      URL: 'https://www.pearson.com/en-gb/subject-catalog/p/fundamentals-of-complex-analysis-with-applications-to-engineering-science-and-mathematics-pearson-new-international-edition/P200000005641/9781292023755',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        edition: 'Pearson New International Edition',
        variant: [
          {
            type: 'book',
            title: 'Fundamentals of Complex Analysis with Applications to Engineering, Science, and Mathematics',
            edition: 3,
            medium: 'eTextbook',
            publisher: 'Pearson Education Limited',
            issued: { 'date-parts': [ [ 2013, 8, 29 ] ] },
            ISBN: '978-1-292-03688-5',
            URL: 'https://www.pearson.com/en-gb/subject-catalog/p/fundamentals-of-complex-analysis-with-applications-to-engineering-science-and-mathematics-pearson-new-international-edition/P200000005641/9781292036885',
            custom: { edition: 'Pearson New International Edition' },
          },
          {
            type: 'book',
            title: 'Fundamentals of Complex Analysis with Applications to Engineering and Science',
            edition: 3,
            medium: 'Paperback',
            publisher: 'Pearson',
            'collection-title': 'Pearson Modern Classic',
            issued: { 'date-parts': [ [ 2017, 2, 13 ] ] },
            ISBN: '978-0-13-468948-7',
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/fundamentals-of-complex-analysis-with-applications-to-engineering-and-science-classic-version/P200000006337',
            custom: { edition: 'Classic Version' },
          },
          {
            type: 'book',
            title: 'Fundamentals of Complex Analysis with Applications to Engineering and Science',
            edition: 3,
            medium: 'eTextbook',
            publisher: 'Pearson',
            issued: { 'date-parts': [ [ 2014, 2, 20 ] ] },
            ISBN: '978-0-321-99750-0',
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/fundamentals-of-complex-analysis-with-applications-to-engineering-and-science-classic-version/P200000006337/9780321997500',
            custom: { edition: 'Classic Version' },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
