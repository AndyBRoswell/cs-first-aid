import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Software Testing',
      author: [ { given: 'Paul C.', family: 'Jorgensen' }, { given: 'Byron', family: 'DeVries' } ],
      edition: 5,
      medium: 'Paperback',
      publisher: 'Auerbach Publications',
      issued: { 'date-parts': [ [ 2022, 8, 15 ] ] },
      ISBN: '9780367767624',
      'number-of-pages': 550,
      language: 'en',
      URL: 'https://www.routledge.com/Software-Testing-A-Craftsman-s-App-roach-Fifth-Edition/Jorgensen-DeVries/p/book/9780367767624',
      accessed: { 'date-parts': [ [ 2026, 10, 11 ] ] },
      custom: {
        subtitle: 'A Craftsman’s Approach',
        variant: [
          {
            type: 'book',
            medium: 'Hardback',
            issued: { 'date-parts': [ [ 2021, 6, 29 ] ] },
            ISBN: '9780367358495',
            URL: 'https://www.routledge.com/Software-Testing-A-Craftsman-s-App-roach-Fifth-Edition/Jorgensen-DeVries/p/book/9780367358495',
          },
          {
            type: 'book',
            medium: 'eBook',
            issued: { 'date-parts': [ [ 2021, 6, 28 ] ] },
            DOI: '10.1201/9781003168447',
            ISBN: '9781003168447',
            URL: 'https://www.taylorfrancis.com/books/mono/10.1201/9781003168447/software-testing-paul-jorgensen-byron-devries',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
