import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Understanding Cryptography',
      author: [ { given: 'Christof', family: 'Paar' }, { given: 'Jan', family: 'Pelzl' }, { given: 'Tim', family: 'Güneysu' } ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Springer Berlin, Heidelberg',
      'publisher-place': 'Berlin, Heidelberg',
      issued: { 'date-parts': [ [ 2024, 5, 15 ] ] },
      ISBN: '978-3-662-69007-9',
      DOI: '10.1007/978-3-662-69007-9',
      'number-of-pages': 'XXI, 543',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-3-662-69007-9',
      accessed: { 'date-parts': [ [ 2026, 10, 5 ] ] },
      custom: {
        subtitle: 'From Established Symmetric and Asymmetric Ciphers to Post-Quantum Algorithms',
        keyword: [ 'Cryptography', 'Applied cryptography', 'Data security', 'AES', 'PKC', 'PKI', 'DES', 'PQC' ],
        topic: [ 'Cryptology', 'Systems and Data Security', 'Quantum Physics', 'Theory of Computation' ],
        'eBook packages': [ 'Computer Science', 'Computer Science (R0)' ],
        URL: [ { link: 'https://www.cryptography-textbook.com/', display_text: 'Companion Website' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            ISBN: '978-3-662-69006-2',
            issued: { 'date-parts': [ [ 2024, 5, 16 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
