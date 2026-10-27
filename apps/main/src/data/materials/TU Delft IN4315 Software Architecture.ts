import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'IN4315: Software Architecture',
      author: [ { given: 'Arie', family: 'van Deursen' }, { given: 'Diomidis', family: 'Spinellis' }, { given: 'Engin', family: 'Bozdag' } ],
      genre: 'Lecture slides',
      medium: 'PDF',
      publisher: 'Technische Universiteit Delft',
      issued: { 'date-parts': [ [ 2022 ] ] },
      version: '2022',
      language: 'en',
      note: '8 publicly linked slide decks from the 2022 course, including the guest lecture on privacy architecture. The Unix architecture lecture links to a file in the 2021 archive.',
      URL: 'https://se.ewi.tudelft.nl/delftswa/2022/',
      accessed: { 'date-parts': [ [ 2026, 10, 27 ] ] },
      custom: {
        free_material: [
          { link: 'https://se.ewi.tudelft.nl/delftswa/2022/slides/lecture1-overview.pdf', display_text: 'Introduction and Course Structure (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://se.ewi.tudelft.nl/delftswa/2022/slides/lecture2-envisioning-the-product.pdf', display_text: 'Envisioning the System (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://se.ewi.tudelft.nl/delftswa/2022/slides/lecture3-architecting-for-quality.pdf', display_text: 'Architecting for Quality (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://se.ewi.tudelft.nl/delftswa/2022/slides/lecture4-architecting-for-scale.pdf', display_text: 'Architecting for Scale (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://se.ewi.tudelft.nl/delftswa/2022/slides/lecture5-synthesis.pdf', display_text: 'Views and Beyond (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://se.ewi.tudelft.nl/delftswa/2021/slides/unix-arch-evolution-v5.pdf', display_text: '50 Years of Unix Architecture Evolution (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://se.ewi.tudelft.nl/delftswa/2022/slides/lecture8-wrapup.pdf', display_text: 'Configurability and Change (PDF)', 'Content-Type': 'application/pdf' },
          { link: 'https://se.ewi.tudelft.nl/delftswa/2022/slides/privacy-architecture-uber.pdf', display_text: 'Privacy Architecture (PDF)', 'Content-Type': 'application/pdf' },
        ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
