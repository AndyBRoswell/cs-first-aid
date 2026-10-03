import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

// The free author manuscripts have their own pagination and are separate from the published eBooks.
export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Michael E.', family: 'Taylor' } ],
      title: 'Introduction to Analysis in One Variable',
      publisher: 'American Mathematical Society',
      'publisher-place': 'Providence, RI',
      'collection-title': 'Pure and Applied Undergraduate Texts',
      'collection-number': 47,
      medium: 'eBook',
      issued: { 'date-parts': [ [ 2020, 8, 11 ] ] },
      'number-of-pages': 'xii, 247',
      ISBN: '978-1-4704-6017-4',
      language: 'en-US',
      URL: 'https://bookstore.ams.org/amstext-47',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        URL: [
          { link: 'https://books.google.com/books/about/Introduction_to_Analysis_in_One_Variable.html?id=6135DwAAQBAJ', display_text: 'Google Books' },
          { link: 'https://ci.nii.ac.jp/ncid/BC00829696', display_text: 'CiNii Books' },
          { link: 'https://www.ams.org/bookstore/pspdf/amstext-47-toc.pdf', display_text: 'AMS' },
          { link: 'https://mtaylor.web.unc.edu/notes/math-521-522-basic-undergraduate-analysis-advanced-calculus/', display_text: 'Michael E. Taylor' },
        ],
        variant: [
          {
            type: 'book', medium: 'Softcover', ISBN: '978-1-4704-5668-9', ISSN: '1943-9334',
            issued: { 'date-parts': [ [ 2020, 8, 11 ] ] }, 'number-of-pages': 'xii, 247',
            URL: 'https://bookstore.ams.org/amstext-47',
            custom: { URL: [
              { link: 'https://ci.nii.ac.jp/ncid/BC00829696', display_text: 'CiNii Books' },
              { link: 'https://books.google.com/books/about/Introduction_to_Analysis_in_One_Variable.html?id=6135DwAAQBAJ', display_text: 'Google Books' },
              { link: 'https://bookstore.ams.org/bookstore/amstext', display_text: 'AMS' },
            ] },
          },
          { type: 'manuscript', medium: 'Author PDF', URL: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf', 'number-of-pages': 'xiv, 277' },
        ],
        free_material: [
          { link: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/anal1v.pdf', display_text: 'Author manuscript PDF', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'Michael E.', family: 'Taylor' } ],
      title: 'Introduction to Analysis in Several Variables',
      publisher: 'American Mathematical Society',
      'publisher-place': 'Providence, RI',
      'collection-title': 'Pure and Applied Undergraduate Texts',
      'collection-number': 46,
      medium: 'eBook',
      issued: { 'date-parts': [ [ 2020, 7, 27 ] ] },
      'number-of-pages': 'xii, 445',
      ISBN: '978-1-4704-6016-7',
      language: 'en-US',
      URL: 'https://bookstore.ams.org/amstext-46',
      accessed: { 'date-parts': [ [ 2026, 10, 3 ] ] },
      custom: {
        subtitle: 'Advanced Calculus',
        URL: [
          { link: 'https://books.google.com/books/about/Introduction_to_Analysis_in_Several_Vari.html?id=_F75DwAAQBAJ', display_text: 'Google Books' },
          { link: 'https://ci.nii.ac.jp/ncid/BC0082970X', display_text: 'CiNii Books' },
          { link: 'https://www.ams.org/bookstore/pspdf/amstext-46-toc.pdf', display_text: 'AMS' },
          { link: 'https://mtaylor.web.unc.edu/notes/math-521-522-basic-undergraduate-analysis-advanced-calculus/', display_text: 'Michael E. Taylor' },
        ],
        variant: [
          {
            type: 'book', medium: 'Softcover', ISBN: '978-1-4704-5669-6', ISSN: '1943-9334',
            issued: { 'date-parts': [ [ 2020, 7, 27 ] ] }, 'number-of-pages': 'xii, 445',
            URL: 'https://bookstore.ams.org/amstext-46',
            custom: { URL: [
              { link: 'https://ci.nii.ac.jp/ncid/BC0082970X', display_text: 'CiNii Books' },
              { link: 'https://books.google.com/books/about/Introduction_to_Analysis_in_Several_Vari.html?id=_F75DwAAQBAJ', display_text: 'Google Books' },
              { link: 'https://bookstore.ams.org/bookstore/amstext', display_text: 'AMS' },
            ] },
          },
          { type: 'manuscript', medium: 'Author PDF', URL: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf', 'number-of-pages': 'xvi, 449' },
        ],
        free_material: [
          { link: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf', display_text: 'Author manuscript PDF', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
