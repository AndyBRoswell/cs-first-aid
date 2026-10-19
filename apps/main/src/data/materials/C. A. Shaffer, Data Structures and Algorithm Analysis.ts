import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Data Structures and Algorithm Analysis in C++',
      author: [ { given: 'Clifford A.', family: 'Shaffer' } ],
      edition: 3,
      version: '3.2.0.10',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2013, 3, 28 ] ] },
      'number-of-pages': 'xix + 596',
      language: 'en',
      URL: 'https://people.cs.vt.edu/shaffer/Book/',
      accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
      custom: {
        institution: [ 'Virginia Tech' ],
        free_material: [
          {
            link: 'https://people.cs.vt.edu/shaffer/Book/C++3e20130328.pdf',
            display_text: 'PDF (C++)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
          },
        ],
        URL: [
          {
            link: 'https://www.doverpublications.com/retailers/pdfs/2022/DoverScienceBacklist2022.pdf#page=3',
            display_text: 'DOVER PUBLICATIONS SCIENCE BACKLIST 2022, p. 3',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            version: '3.2',
            publisher: 'Dover Publications',
            issued: { 'date-parts': [ [ 2011 ] ] },
            ISBN: '9780486485829',
            'number-of-pages': 624,
            URL: 'https://store.doverpublications.com/products/9780486485829',
            accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'Data Structures and Algorithm Analysis in Java',
      author: [ { given: 'Clifford A.', family: 'Shaffer' } ],
      edition: 3,
      version: '3.2.0.10',
      medium: 'PDF',
      issued: { 'date-parts': [ [ 2013, 3, 28 ] ] },
      'number-of-pages': 'xx + 582',
      language: 'en',
      URL: 'https://people.cs.vt.edu/shaffer/Book/',
      accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
      custom: {
        institution: [ 'Virginia Tech' ],
        free_material: [
          {
            link: 'https://people.cs.vt.edu/shaffer/Book/JAVA3e20130328.pdf',
            display_text: 'PDF (Java)',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
          },
        ],
        URL: [
          {
            link: 'https://www.doverpublications.com/retailers/pdfs/2022/DoverScienceBacklist2022.pdf#page=3',
            display_text: 'DOVER PUBLICATIONS SCIENCE BACKLIST 2022, p. 3',
            'Content-Type': 'application/pdf',
            accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            version: '3.2',
            publisher: 'Dover Publications',
            issued: { 'date-parts': [ [ 2011, 9, 14 ] ] },
            ISBN: '9780486485812',
            'number-of-pages': 608,
            URL: 'https://www.doverpublications.com/retailers/pdfs/2022/DoverScienceBacklist2022.pdf#page=3',
            accessed: { 'date-parts': [ [ 2026, 10, 19 ] ] },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
