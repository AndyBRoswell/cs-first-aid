import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Art of Computer Programming',
      'volume-title': 'Fundamental Algorithms',
      volume: 1,
      author: [ { given: 'Donald E.', family: 'Knuth' } ],
      edition: 3,
      medium: 'eBook',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 1997, 7, 4 ] ] },
      ISBN: '978-0-13-348878-4',
      'number-of-pages': 672,
      language: 'en',
      URL: 'https://www.informit.com/store/art-of-computer-programming-volume-1-fundamental-algorithms-9780133488784',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        URL: [ { link: 'https://cs.stanford.edu/~knuth/taocp.html', display_text: 'Author’s volume bibliography' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            'publisher-place': 'Reading, Massachusetts',
            ISBN: '978-0-201-89683-1',
            issued: { 'date-parts': [ [ 1997, 7, 7 ] ] },
            URL: 'https://www.abebooks.com/9780201896831/Art-Computer-Programming-Vol-Fundamental-0201896834/plp',
            custom: {
              URL: [
                { link: 'https://www.informit.com/store/art-of-computer-programming-volume-1-fundamental-algorithms-9780201896831', display_text: 'InformIT: publication date' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Art of Computer Programming',
      'volume-title': 'Seminumerical Algorithms',
      volume: 2,
      author: [ { given: 'Donald E.', family: 'Knuth' } ],
      edition: 3,
      medium: 'eBook',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2014, 5, 6 ] ] },
      ISBN: '978-0-13-348880-7',
      'number-of-pages': 784,
      language: 'en',
      URL: 'https://www.informit.com/store/art-of-computer-programming-volume-2-seminumerical-9780133488807',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        URL: [ { link: 'https://cs.stanford.edu/~knuth/taocp.html', display_text: 'Author’s volume bibliography' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            'publisher-place': 'Reading, Massachusetts',
            ISBN: '978-0-201-89684-8',
            issued: { 'date-parts': [ [ 1997, 11, 4 ] ] },
            URL: 'https://www.abebooks.com/9780201896848/Art-Computer-Programming-Seminumerical-Algorithms-0201896842/plp',
            custom: {
              URL: [
                { link: 'https://www.informit.com/store/art-of-computer-programming-volume-2-seminumerical-9780201896848', display_text: 'InformIT: publication date' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Art of Computer Programming',
      'volume-title': 'Sorting and Searching',
      volume: 3,
      author: [ { given: 'Donald E.', family: 'Knuth' } ],
      edition: 2,
      medium: 'eBook',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 1998, 4, 24 ] ] },
      ISBN: '978-0-13-348884-5',
      'number-of-pages': 800,
      language: 'en',
      URL: 'https://www.informit.com/store/art-of-computer-programming-volume-3-sorting-and-searching-9780133488845',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        URL: [ { link: 'https://cs.stanford.edu/~knuth/taocp.html', display_text: 'Author’s volume bibliography' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            'publisher-place': 'Reading, Massachusetts',
            ISBN: '978-0-201-89685-5',
            issued: { 'date-parts': [ [ 1998, 4, 24 ] ] },
            URL: 'https://www.zvab.com/9780201896855/Art-Computer-Programming-Volume-Sorting-0201896850/plp',
            custom: {
              URL: [
                { link: 'https://www.informit.com/store/art-of-computer-programming-volume-3-sorting-and-searching-9780201896855', display_text: 'InformIT: publication date' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Art of Computer Programming',
      'volume-title': 'Combinatorial Algorithms, Part 1',
      volume: '4A',
      author: [ { given: 'Donald E.', family: 'Knuth' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2014, 9, 12 ] ] },
      ISBN: '978-0-13-348888-3',
      'number-of-pages': 912,
      language: 'en',
      URL: 'https://www.informit.com/store/art-of-computer-programming-volume-4a-combinatorial-9780133488883',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        URL: [ { link: 'https://cs.stanford.edu/~knuth/taocp.html', display_text: 'Author’s volume bibliography' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            'publisher-place': 'Upper Saddle River, New Jersey',
            ISBN: '978-0-201-03804-0',
            issued: { 'date-parts': [ [ 2011, 1, 12 ] ] },
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/art-of-computer-programming-the-combinatorial-algorithms-volume-4a-part-1/P200000009030/9780201038040',
            custom: {
              URL: [
                { link: 'https://www.informit.com/store/art-of-computer-programming-volume-4a-combinatorial-9780201038040', display_text: 'InformIT: publication date' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Art of Computer Programming',
      'volume-title': 'Combinatorial Algorithms, Part 2',
      volume: '4B',
      author: [ { given: 'Donald E.', family: 'Knuth' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Addison-Wesley Professional',
      issued: { 'date-parts': [ [ 2022, 10, 11 ] ] },
      ISBN: '978-0-13-792684-8',
      'number-of-pages': 736,
      language: 'en',
      URL: 'https://www.informit.com/store/art-of-computer-programming-volume-4b-combinatorial-9780137926848',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        URL: [ { link: 'https://cs.stanford.edu/~knuth/taocp.html', display_text: 'Author’s volume bibliography' } ],
        variant: [
          {
            type: 'book',
            medium: 'Hardcover',
            'publisher-place': 'Upper Saddle River, New Jersey',
            ISBN: '978-0-201-03806-4',
            issued: { 'date-parts': [ [ 2022, 9, 28 ] ] },
            URL: 'https://www.pearson.com/en-us/subject-catalog/p/art-of-computer-programming-volume-4b-the-combinatorial-algorithms/P200000002106/9780201038064',
            custom: {
              URL: [
                { link: 'https://www.informit.com/store/art-of-computer-programming-volume-4b-combinatorial-9780201038064', display_text: 'InformIT: publication date' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
