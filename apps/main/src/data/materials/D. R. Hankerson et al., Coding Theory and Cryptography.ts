import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Coding Theory and Cryptography',
      author: [
        { given: 'D. R.', family: 'Hankerson' },
        { given: 'D. G.', family: 'Hoffman' },
        { given: 'D. A.', family: 'Leonard' },
        { given: 'C. C.', family: 'Lindner' },
        { given: 'K. T.', family: 'Phelps' },
        { given: 'C. A.', family: 'Rodger' },
        { given: 'J. R.', family: 'Wall' },
      ],
      'collection-editor': [ { given: 'Earl J.', family: 'Taft' }, { given: 'Zuhair', family: 'Nashed' } ],
      edition: 2,
      medium: 'Hardback',
      publisher: 'Marcel Dekker',
      'publisher-place': 'New York, NY',
      issued: { 'date-parts': [ [ 2000, 8, 4 ] ] },
      ISBN: '9780824704650',
      DOI: '10.1201/b16944',
      'collection-title': 'Pure and Applied Mathematics',
      'collection-number': 234,
      'number-of-pages': 368,
      language: 'en',
      URL: 'https://www.routledge.com/Coding-Theory-and-Cryptography-The-Essentials-Second-Edition/Hankerson-Hoffman-Leonard-Lindner-Phelps-Rodger-Wall/p/book/9780824704650',
      accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
      custom: {
        subtitle: 'The Essentials',
        edition: 'Revised and Expanded',
        URL: [
          {
            link: 'https://www.taylorfrancis.com/books/mono/10.1201/b16944/coding-theory-cryptography-hankerson-gary-hoffman-leonard-charles-lindner-phelps-rodger-wall',
            display_text: 'Taylor & Francis eBooks',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://www.hive.co.uk/Product/DC-Hankerson/Coding-Theory-and-Cryptography--The-Essentials-Second-Edition/24252683',
            display_text: 'Hive',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://api.pageplace.de/preview/DT0400.9781482270709_A38244923/preview-9781482270709_A38244923.pdf',
            display_text: 'Preview',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            link: 'https://ci.nii.ac.jp/ncid/BA48065155',
            display_text: 'CiNii Books',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook (PDF)',
            publisher: 'CRC Press',
            'publisher-place': 'Boca Raton, FL',
            ISBN: '9781482270709',
            issued: { 'date-parts': [ [ 2000, 8, 4 ] ] },
            URL: 'https://www.hive.co.uk/Product/DC-Hankerson/Coding-Theory-and-Cryptography--The-Essentials-Second-Edition/24252683',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
          {
            type: 'book',
            medium: 'eBook',
            publisher: 'CRC Press',
            'publisher-place': 'Boca Raton, FL',
            ISBN: '9780429180934',
            issued: { 'date-parts': [ [ 2000, 8, 4 ] ] },
            URL: 'https://www.taylorfrancis.com/books/mono/10.1201/b16944/coding-theory-cryptography-hankerson-gary-hoffman-leonard-charles-lindner-phelps-rodger-wall',
            accessed: { 'date-parts': [ [ 2026, 10, 18 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
