import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Architecture of Open Source Applications',
      editor: [ { given: 'Amy', family: 'Brown' }, { given: 'Greg', family: 'Wilson' } ],
      volume: 1,
      medium: 'Online',
      issued: { 'date-parts': [ [ 2011 ] ] },
      language: 'en',
      URL: 'https://aosabook.org/en/#aosa1',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        subtitle: 'Elegance, Evolution, and a Few Fearless Hacks',
        URL: [
          {
            link: 'https://github.com/aosabook/aosabook',
            display_text: 'GitHub',
            modified: { 'date-parts': [ [ 2025, 8, 30 ] ] },
          },
          {
            link: 'https://third-bit.com/2011/05/23/the-architecture-of-open-source-applications-is-now-available/',
            display_text: 'Publication announcement (Greg Wilson)',
          }, // issued: available online by 2011-05-23
        ],
        free_material: [
          { link: 'https://aosabook.org/en/#aosa1', display_text: 'HTML', 'Content-Type': 'text/html', license: 'CC-BY-3.0' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            publisher: 'Lulu.com',
            issued: { 'date-parts': [ [ 2011, 5, 19 ] ] },
            ISBN: '9781257638017',
            'number-of-pages': 432,
            dimensions: '189 × 246 mm',
            language: 'en',
            URL: 'https://www.lulu.com/shop/greg-wilson-and-amy-brown/the-architecture-of-open-source-applications/paperback/product-12vn4q2m.html',
            custom: {
              binding: 'Perfect bound',
              'Interior Color': 'Black and white',
            } satisfies CSL.Custom,
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'book',
      title: 'The Architecture of Open Source Applications',
      editor: [ { given: 'Amy', family: 'Brown' }, { given: 'Greg', family: 'Wilson' } ],
      volume: 2,
      medium: 'Online',
      issued: { 'date-parts': [ [ 2012 ] ] },
      language: 'en',
      URL: 'https://aosabook.org/en/#aosa2',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        subtitle: 'Structure, Scale, and a Few More Fearless Hacks',
        URL: [
          {
            link: 'https://github.com/aosabook/aosabook',
            display_text: 'GitHub',
            modified: { 'date-parts': [ [ 2025, 8, 30 ] ] },
          },
          {
            link: 'https://www.guillaumepaumier.com/articles/new-book-dives-into-the-architecture-of-mediawiki-git-puppet-and-other-open-source-applications/',
            display_text: 'Online availability announcement (Guillaume Paumier)',
          }, // issued: available online by 2012-05-11
          {
            link: 'https://carpentries.org/blog/2012/05/the-architecture-of-open-source-applications-volume-2/',
            display_text: 'Publication announcement (Greg Wilson)',
          },
        ],
        free_material: [
          { link: 'https://aosabook.org/en/#aosa2', display_text: 'HTML', 'Content-Type': 'text/html', license: 'CC-BY-3.0' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'Paperback',
            publisher: 'Lulu.com',
            issued: { 'date-parts': [ [ 2012, 3, 31 ] ] },
            ISBN: '9781105571817',
            'number-of-pages': 390,
            dimensions: '189 × 246 mm',
            language: 'en',
            URL: 'https://www.lulu.com/shop/amy-brown-and-greg-wilson/the-architecture-of-open-source-applications-volume-ii/paperback/product-20111008.html',
            custom: {
              binding: 'Perfect bound',
              'Interior Color': 'Black and white',
              keyword: [ 'software architecture', 'open source', 'software engineering', 'programming' ],
            } satisfies CSL.Custom,
          },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
