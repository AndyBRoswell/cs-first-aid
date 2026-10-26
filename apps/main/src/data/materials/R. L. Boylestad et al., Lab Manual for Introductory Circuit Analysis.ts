import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as catalog from '@cs-first-aid/bibkit/catalog'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Lab Manual for Introductory Circuit Analysis',
      author: [ { given: 'Robert L.', family: 'Boylestad' }, { given: 'Brian A.', family: 'Olivari' } ],
      edition: 14,
      genre: 'Laboratory manual',
      medium: 'Paperback',
      dimensions: '27.6 × 21.6 cm',
      publisher: 'Pearson Education, Inc.',
      'publisher-place': 'Hoboken',
      issued: { 'date-parts': [ [ 2022, 7, 14 ] ] },
      ISBN: '9780137283644',
      'number-of-pages': 576,
      language: 'en',
      note: 'Companion laboratory manual for Introductory Circuit Analysis, 14th edition.',
      URL: 'https://www.pearson.com/en-us/subject-catalog/p/introductory-circuit-analysis/P200000000822/9780137283644',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        URL: [
          { link: 'https://usa.kinokuniya.com/products/9780137283644', display_text: 'Kinokuniya' },
          { link: 'https://elib.duytan.edu.vn/Sach/Detail/93125', display_text: 'Duy Tan University Library' }, // publisher, publisher-place
        ],
      } satisfies CSL.Custom,
    },
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'Laboratory Manual for Introductory Circuit Analysis',
      author: [ { given: 'Robert L.', family: 'Boylestad' }, { given: 'Gabriel', family: 'Kousourou' } ],
      edition: 13,
      genre: 'Laboratory manual',
      medium: 'Paperback',
      dimensions: '28 cm',
      publisher: 'Pearson',
      issued: { 'date-parts': [ [ 2016 ] ] },
      ISBN: '9780133923780',
      'number-of-pages': 576, // Khulna University records vii, 554 pages; discrepancy unresolved.
      language: 'en',
      note: 'Companion laboratory manual for Introductory Circuit Analysis, 13th edition. Also assigned alongside Nilsson and Riedel\'s Electric Circuits, 12th edition, in East Texas A&M University\'s spring 2025 EE 220 course.',
      URL: 'https://opac.library.ku.ac.bd/cgi-bin/koha/opac-detail.pl?biblionumber=1179',
      accessed: { 'date-parts': [ [ 2026, 10, 25 ] ] },
      custom: {
        URL: [
          { link: 'https://opac.library.ku.ac.bd/cgi-bin/koha/opac-detail.pl?biblionumber=1179', display_text: 'Khulna University Library' }, // title, author, edition
          { link: 'https://elib.duytan.edu.vn/Sach/Detail/66475', display_text: 'Duy Tan University Library' }, // number-of-pages discrepancy
          { link: 'https://openlibrary.org/books/OL27488844M', display_text: 'Open Library' },
          { link: 'https://openlibrary.org/books/OL27488844M.json', display_text: 'Open Library: Book data' }, // medium, number-of-pages
          { link: 'https://oneonta.ecampus.com/lab-manual-introductory-circuit-analysis/bk/9780133923780', display_text: 'eCampus' },
          { link: 'https://inside.tamuc.edu/academics/cvSyllabi/syllabi/202520/21781.pdf', display_text: 'EE 220: Course Syllabus, Spring 2025' },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

export function resolve_relations(): void {
  const material: types_data.Material = entries[0]!.material
  material.custom!.companion = catalog.filter(
    item => item.type === 'book' && item.ISBN === '9780137594115',
    { count: 1 }
  )
}
