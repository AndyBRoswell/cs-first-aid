import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Compilers: Principles, Techniques, and Tools',
      author: [
        { given: 'Alfred V.', family: 'Aho' },
        { given: 'Monica S.', family: 'Lam' },
        { given: 'Ravi', family: 'Sethi' },
        { given: 'Jeffrey D.', family: 'Ullman' },
      ],
      edition: 2,
      medium: 'Hardcover',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2006 ] ] },
      ISBN: '9780321486813',
      language: 'en',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/compilers-principles-techniques-and-tools/P200000003472/9780321486813',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        variant: [
          {
            type: 'book',
            edition: 2,
            medium: 'Paperback',
            publisher: 'Pearson Education Limited',
            issued: { 'date-parts': [ [ 2013 ] ] },
            ISBN: '9781292024349',
            'number-of-pages': 952,
            URL: 'https://www.pearson.com/en-gb/subject-catalog/p/compilers-pearson-new-international-edition/P200000003568',
            note: 'This edition omits Chapter 12, Interprocedural Analysis.',
            custom: {
              edition: 'Pearson New International Edition',
              URL: [
                { link: 'https://toc.library.ethz.ch/objects/pdf03/e01_978-1-292-02434-9_01.pdf', display_text: 'ETH Zürich: table of contents' },
                { link: 'https://studieinfo.liu.se/en/kurs/TDDE66/ht-2024#literature', display_text: 'Linköping University: edition comparison' },
              ],
            },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
