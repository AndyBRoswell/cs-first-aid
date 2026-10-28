import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Computer Networks: A Systems Approach',
      author: [ { given: 'Larry L.', family: 'Peterson' }, { given: 'Bruce S.', family: 'Davie' } ],
      edition: 6,
      medium: 'Paperback',
      dimensions: '24 cm',
      publisher: 'Morgan Kaufmann',
      'publisher-place': 'Cambridge, MA',
      issued: { 'date-parts': [ [ 2021, 3, 15 ] ] }, // Elsevier Educate; the Shop's date matches the eBook release.
      ISBN: '9780128182000',
      DOI: '10.1016/C2018-0-01477-2',
      'collection-title': 'The Morgan Kaufmann Series in Networking',
      'number-of-pages': 'xxvi, 817',
      language: 'en',
      URL: 'https://shop.elsevier.com/books/computer-networks/peterson/978-0-12-818200-0',
      accessed: { 'date-parts': [ [ 2026, 10, 28 ] ] },
      custom: {
        copyright: 'Elsevier Inc. 2022',
        URL: [
          { link: 'https://www.educate.elsevier.com/book/details/9780128182000', display_text: 'Elsevier Educate' }, // issued, number-of-pages
          { link: 'https://shop.elsevier.com/books/book-companion/9780128182000', display_text: 'Elsevier: Companion resources' }, // publisher-place, copyright
          { link: 'https://www.sciencedirect.com/book/9780128182000/computer-networks', display_text: 'ScienceDirect' }, // DOI, collection-title
          { link: 'https://ci.nii.ac.jp/ncid/BC06575965', display_text: 'CiNii Books' }, // dimensions; pagination: xxvi, 817
          { link: 'https://livebrary.overdrive.com/media/5405098', display_text: 'OverDrive (eBook)' }, // custom.variant
          { link: 'https://github.com/SystemsApproach/book', display_text: 'Open-source book: source and version information' },
        ],
        free_material: [
          { link: 'https://book.systemsapproach.org/', display_text: 'HTML (continuously updated open-source edition)', 'Content-Type': 'text/html', license: 'CC-BY-4.0' },
          { link: 'https://brand.elsevier.com/api/asset/eyJjbGllbnRJZCI6bnVsbCwiaWQiOjI4NTgsInRpbWVzdGFtcCI6MTczMjAxMDY2OCwidmVyc2lvbiI6MTcyOTU5NTMzMX0%3Aelsevier%3AzQJit-Jw8buZeZhZ42vz-Db4El0Zvm_yVB5sjEOD8fw/download', display_text: 'Selected exercise solutions (6th edition, PDF)', 'Content-Type': 'application/pdf' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook (EPUB)',
            issued: { 'date-parts': [ [ 2021, 1, 20 ] ] },
            ISBN: '9780128182017',
            URL: 'https://livebrary.overdrive.com/media/5405098',
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
