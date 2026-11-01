import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'Database Anonymization',
      author: [ { given: 'Josep', family: 'Domingo-Ferrer' }, { given: 'David', family: 'Sánchez' }, { given: 'Jordi', family: 'Soria-Comas' } ],
      edition: 1,
      medium: 'eBook',
      publisher: 'Springer International Publishing',
      'publisher-place': 'Cham',
      issued: { 'date-parts': [ [ 2022, 5, 31 ] ] },
      'original-date': { 'date-parts': [ [ 2016 ] ] },
      'original-publisher': 'Morgan & Claypool Publishers',
      ISBN: '9783031023477',
      DOI: '10.1007/978-3-031-02347-7',
      'collection-title': 'Synthesis Lectures on Information Security, Privacy, and Trust',
      'collection-number': 15,
      'collection-editor': [ { given: 'Elisa', family: 'Bertino' }, { given: 'Ravi', family: 'Sandhu' } ], // Editors named in the 2016 book.
      ISSN: '1945-9750',
      'number-of-pages': 'XV + 120',
      language: 'en',
      URL: 'https://link.springer.com/book/10.1007/978-3-031-02347-7',
      accessed: { 'date-parts': [ [ 2026, 11, 1 ] ] },
      custom: {
        subtitle: 'Privacy Models, Data Utility, and Microaggregation-based Inter-model Connections',
        'collection-title-short': 'SLISPT',
        copyright: 'Springer Nature Switzerland AG 2016',
        keyword: [ 'data releases', 'privacy protection', 'anonymization', 'privacy models', 'statistical disclosure limitation', 'statistical disclosure control', 'microaggregation' ], // Book front matter.
        topic: [ 'Systems and Data Security' ],
        'eBook packages': [ 'Synthesis Collection of Technology (R0)', 'eBColl Synthesis Collection 6' ],
        variant: [
          {
            type: 'book',
            medium: 'Softcover',
            ISBN: '9783031012198',
            ISSN: '1945-9742',
            issued: { 'date-parts': [ [ 2016, 1, 11 ] ] },
          },
          {
            type: 'book',
            medium: 'Paperback',
            publisher: 'Morgan & Claypool Publishers',
            issued: { 'date-parts': [ [ 2016 ] ] },
            ISBN: '9781627058438',
            DOI: '10.2200/S00690ED1V01Y201512SPT015',
            ISSN: '1945-9742',
            'number-of-pages': 136, // Author's bibliography 【6 Sep 2026]: https://crises-deim.urv.cat/jdomingo/docs/currentCVeng.pdf
            custom: { copyright: 'Morgan & Claypool 2016' },
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
