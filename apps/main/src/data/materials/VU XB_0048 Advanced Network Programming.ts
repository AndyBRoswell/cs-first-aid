import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Advanced Network Programming',
      author: [ { given: 'Animesh', family: 'Trivedi' }, { given: 'Lin', family: 'Wang' } ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'XB_0048',
      issued: { 'date-parts': [ [ 2020 ] ] },
      version: '2020',
      'number-of-pages': 687, // Total across 11 slide decks covering 11 lectures.
      language: 'en',
      URL: 'https://github.com/animeshtrivedi/animeshtrivedi.github.io/tree/master/files/2020/anp',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://animeshtrivedi.github.io/course-anp/', display_text: 'Lecturer course page and public-release statement' },
          { link: 'https://atlarge-research.com/courses/advanced-net-prog-vu/', display_text: 'Research group course page (2020 syllabus)' },
        ],
        free_material: {
          Slides: [
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture1-introduction.pdf', display_text: 'Lecture 1: Introduction (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture2-concepts.pdf', display_text: 'Lecture 2: Networking concepts (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture3-linux-internals.pdf', display_text: 'Lecture 3: Linux networking internals (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture4-multicore.pdf', display_text: 'Lecture 4: Multicore networking (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture5-uspace-networking.pdf', display_text: 'Lecture 5: Userspace networking stacks (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture6-rdma.pdf', display_text: 'Lecture 6: RDMA networking (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture7-routing.pdf', display_text: 'Lecture 7: Network forwarding and routing (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture8-sdn.pdf', display_text: 'Lecture 8: Software-defined networking (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture9-pdp.pdf', display_text: 'Lecture 9: Programmable data plane (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture10-cloudnet.pdf', display_text: 'Lecture 10: Cloud networking (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://animeshtrivedi.github.io/files/2020/anp/2020-anp-lecture11-beyond.pdf', display_text: 'Lecture 11: Beyond networking (PDF)', 'Content-Type': 'application/pdf' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Advanced Network Programming',
      author: [ { given: 'Animesh', family: 'Trivedi' }, { given: 'Matthijs', family: 'Jansen' }, { given: 'Jesse', family: 'Donkervliet' } ], // Cover signatures; lectures 7–9 have no author byline.
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'XB_0048',
      issued: { 'date-parts': [ [ 2023 ] ] },
      version: '2023',
      'number-of-pages': 843, // Total across 13 slide decks covering 11 lectures.
      language: 'en',
      URL: 'https://drive.google.com/drive/folders/1o12Qgzj1xFBf-xIcAeALqUN1Gx8iMr29',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        lecturer: [ { given: 'Animesh', family: 'Trivedi' }, { given: 'Balakrishnan', family: 'Chandrasekaran' }, { given: 'Matthijs', family: 'Jansen' }, { given: 'Jesse', family: 'Donkervliet' } ],
        URL: [
          { link: 'https://studiegids.vu.nl/en/courses/2024-2025/XB_0048', display_text: 'Official course description (XB_0048, 2024–2025)' },
          { link: 'https://animeshtrivedi.github.io/course-anp/', display_text: 'Lecturer course page and public-release statement' },
        ],
        free_material: {
          Slides: [
            { link: 'https://docs.google.com/presentation/d/1jhx00Js4j290PAviCqHnkGAHwcXgOR4ZfRRcF2nsKjo/export/pdf', display_text: 'Lecture 1: Introduction (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/1_b9mYttuLLmFHJYfsSrfX7RjIaxCLOE3EzAIqbL9OTA/export/pdf', display_text: 'Lecture 2: Networking concepts (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/1zkyQVcCP966Zdq7BzLmyQJ8_p7p07voRgFFDjcJkSLo/export/pdf', display_text: 'Lecture 3: Linux networking internals (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/15k-SS04uQ21FvCRlsfx_ozkpILgdGau41DMC5FHjVZ4/export/pdf', display_text: 'Lecture 4: Multicore scalability (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/1DeVqP-9qg2QZRGNC7Dp4Ei78yv6lwGdbrPE-WW65xG0/export/pdf', display_text: 'Lecture 5: Userspace networking stacks (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://docs.google.com/presentation/d/1pKIUyFqmH7ptSKbC9HXysZx8cXKxbOsKiUmZZfR3bm0/export/pdf', display_text: 'Lecture 6: RDMA networking (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://drive.google.com/uc?export=download&id=1eh9UuaFksvoTYxlTfKLKsqjB30GcLbSi', display_text: 'Lecture 7: BGP (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://drive.google.com/uc?export=download&id=1aazGM1_H8vPskkLnuKsZhWYO_duHLpmA', display_text: 'Lecture 7: WAN and routing (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://drive.google.com/uc?export=download&id=1xoDQraC6yAUXKvsrRH1Mh5lXyKDberAH', display_text: 'Lecture 8: Content delivery networks (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://drive.google.com/uc?export=download&id=1uPyBcsJgHgGtvt-AY2hpSIUCS_altBgz', display_text: 'Lecture 8: IP anycast (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://drive.google.com/uc?export=download&id=1niNqaWbzQhw6CqfIkwuTlVRdhM1QUVuk', display_text: 'Lecture 9: Congestion control (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://drive.google.com/uc?export=download&id=1CpbSBJq1I9Co_0ZDp_MDvSU4tm8qLA9x', display_text: 'Lecture 10: Cellular networks (PDF)', 'Content-Type': 'application/pdf' },
            { link: 'https://drive.google.com/uc?export=download&id=1ytsblHLtTeJGecG3iOFElCUls8_y5wr5', display_text: 'Lecture 11: Networking for online games (PDF)', 'Content-Type': 'application/pdf' },
          ],
          'Editable source': [
            { link: 'https://docs.google.com/presentation/d/1jhx00Js4j290PAviCqHnkGAHwcXgOR4ZfRRcF2nsKjo/edit', display_text: 'Lecture 1: Introduction (Google Slides)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/presentation/d/1_b9mYttuLLmFHJYfsSrfX7RjIaxCLOE3EzAIqbL9OTA/edit', display_text: 'Lecture 2: Networking concepts (Google Slides)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/presentation/d/1zkyQVcCP966Zdq7BzLmyQJ8_p7p07voRgFFDjcJkSLo/edit', display_text: 'Lecture 3: Linux networking internals (Google Slides)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/presentation/d/15k-SS04uQ21FvCRlsfx_ozkpILgdGau41DMC5FHjVZ4/edit', display_text: 'Lecture 4: Multicore scalability (Google Slides)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/presentation/d/1DeVqP-9qg2QZRGNC7Dp4Ei78yv6lwGdbrPE-WW65xG0/edit', display_text: 'Lecture 5: Userspace networking stacks (Google Slides)', 'Content-Type': 'text/html' },
            { link: 'https://docs.google.com/presentation/d/1pKIUyFqmH7ptSKbC9HXysZx8cXKxbOsKiUmZZfR3bm0/edit', display_text: 'Lecture 6: RDMA networking (Google Slides)', 'Content-Type': 'text/html' },
          ],
        },
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'document',
      title: 'Advanced Network Programming Course Project Handbook',
      author: [
        { given: 'Animesh', family: 'Trivedi' },
        { given: 'Balakrishnan', family: 'Chandrasekaran' },
        { given: 'Jesse', family: 'Donkervliet' },
        { given: 'Matthijs', family: 'Jansen' },
        { given: 'Krijn', family: 'Doekemeijer' },
      ],
      genre: 'Laboratory manual',
      medium: 'Google Docs and PDF',
      publisher: 'Vrije Universiteit Amsterdam',
      number: 'XB_0048',
      issued: { 'date-parts': [ [ 2023, 10, 27 ] ] }, // Revision history.
      version: '2.0',
      'number-of-pages': 58,
      language: 'en',
      URL: 'https://docs.google.com/document/d/1ytNjPB8nz6otKcD3G-3m9MT9zKcqZWg-dnuCK3RR3VM/edit',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
      custom: {
        URL: [
          { link: 'https://animeshtrivedi.github.io/course-anp/', display_text: 'Lecturer course page and public-release statement' },
          { link: 'https://drive.google.com/drive/folders/1DikFZmkc-jcW1biGPW_XtfHaY6dTsM9M', display_text: 'Official project assignment folder' },
        ],
        free_material: [
          { link: 'https://docs.google.com/document/d/1ytNjPB8nz6otKcD3G-3m9MT9zKcqZWg-dnuCK3RR3VM/export?format=pdf', display_text: 'Project handbook v2.0 (2023, PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://drive.google.com/file/d/1XCMRY38CSDWCNEgmkdUiEDni2AMuliYE/view', display_text: 'Official ANP skeleton code and handbook (2023, ZIP)' }, // Bundled 2023 v2.0 handbook; source timestamps: 2023-10-27.
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

