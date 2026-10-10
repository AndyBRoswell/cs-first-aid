import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'How Google Tests Software',
      author: [ { given: 'James A.', family: 'Whittaker' }, { given: 'Jason', family: 'Arbon' }, { given: 'Jeff', family: 'Carollo' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2012, 3, 21 ] ] },
      ISBN: '9780132851596',
      'number-of-pages': 320,
      language: 'en',
      URL: 'https://www.informit.com/store/how-google-tests-software-9780132851596',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            issued: { 'date-parts': [ [ 2012, 3, 23 ] ] },
            ISBN: '9780321803023',
            URL: 'https://www.informit.com/store/how-google-tests-software-9780321803023',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
