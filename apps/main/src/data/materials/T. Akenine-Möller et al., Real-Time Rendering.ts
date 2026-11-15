import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [ 'RTR4', ],
    material: {
      type: 'book',
      title: 'Real-Time Rendering',
      author: [
        { given: 'Tomas', family: 'Akenine-Möller', },
        { given: 'Eric', family: 'Haines', },
        { given: 'Naty', family: 'Hoffman', },
        { given: 'Angelo', family: 'Pesce', },
        { given: 'Michał', family: 'Iwanicki', },
        { given: 'Sébastien', family: 'Hillaire', },
      ],
      edition: 4,
      medium: 'Hardback',
      publisher: 'A K Peters/CRC Press',
      'publisher-place': 'Boca Raton, FL, USA',
      issued: { 'date-parts': [ [ 2018, 8, 6, ], ], },
      'number-of-pages': 1198,
      ISBN: '9781138627000',
      DOI: '10.1201/b22086',
      language: 'en',
      URL: 'https://www.routledge.com/Real-Time-Rendering-Fourth-Edition/Akenine-Moller-Haines-Hoffman/p/book/9781138627000',
      accessed: { 'date-parts': [ [ 2026, 11, 15, ], ], },
      custom: {
        URL: [
          { link: 'https://www.realtimerendering.com/', }, // Complete author list and supplementary resources.
          { link: 'https://www.realtimerendering.com/bibtex_rtr4.txt', }, // Publisher location and RTR4 citation key.
          { link: 'https://portal.research.lu.se/en/publications/real-time-rendering/', }, // DOI.
          { link: 'https://www.hive.co.uk/product/tomas-akenine-moller/real-time-rendering-fourth-edition/22991060', }, // Hardback publication date in Other Formats.
        ],
        free_material: [
          {
            link: 'https://www.realtimerendering.com/Real-Time_Rendering_4th-TOC_Preface_Intro_Bib_Index.pdf',
            display_text: 'Table of Contents, Preface, Introduction, Bibliography, and Index',
            'Content-Type': 'application/pdf',
            license: 'Reproduction requires publisher permission except as permitted under U.S. Copyright Law.',
            created: { 'date-parts': [ [ 2018, 7, 3, ], ], }, // Embedded PDF CreationDate; no release date is stated.
            accessed: { 'date-parts': [ [ 2026, 11, 15, ], ], },
          },
          {
            link: 'https://www.realtimerendering.com/Real-Time_Rendering_4th-Collision_Detection.pdf',
            display_text: 'Online Chapter: Collision Detection',
            'Content-Type': 'application/pdf',
            note: 'Version 1.3.',
            issued: { 'date-parts': [ [ 2018, 10, 12, ], ], }, // Version date on the cover.
            accessed: { 'date-parts': [ [ 2026, 11, 15, ], ], },
          },
          {
            link: 'https://www.realtimerendering.com/Real-Time_Rendering_4th-Real-Time_Ray_Tracing.pdf',
            display_text: 'Online Chapter: Real-Time Ray Tracing',
            'Content-Type': 'application/pdf',
            note: 'Version 1.4.',
            issued: { 'date-parts': [ [ 2018, 11, 5, ], ], }, // Version date on the cover.
            accessed: { 'date-parts': [ [ 2026, 11, 15, ], ], },
          },
          {
            link: 'https://www.realtimerendering.com/Real-Time_Rendering_4th-Appendices.pdf',
            display_text: 'Online Appendices: Linear Algebra and Trigonometry',
            'Content-Type': 'application/pdf',
            note: 'Version 1.1.',
            issued: { 'date-parts': [ [ 2018, 7, 19, ], ], }, // Version date on the cover.
            accessed: { 'date-parts': [ [ 2026, 11, 15, ], ], },
          },
        ],
        variant: [
          {
            type: 'book',
            medium: 'eBook',
            ISBN: '9780429225406',
            URL: 'https://www.routledge.com/Real-Time-Rendering-Fourth-Edition/Akenine-Moller-Haines-Hoffman/p/book/9780429225406',
          },
          {
            type: 'book',
            medium: 'EPUB',
            ISBN: '9781351816144',
            URL: 'https://www.kobo.com/ww/en/ebook/real-time-rendering-fourth-edition',
          },
          {
            type: 'book',
            medium: 'PDF',
            ISBN: '9781351816151',
            URL: 'https://www.hive.co.uk/product/tomas-akenine-moller/real-time-rendering-fourth-edition/22991061',
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]
