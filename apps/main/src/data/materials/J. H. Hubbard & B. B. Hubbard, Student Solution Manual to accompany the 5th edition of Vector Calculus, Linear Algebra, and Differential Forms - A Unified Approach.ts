import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'
import * as catalog from '@cs-first-aid/bibkit/catalog'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      author: [ { given: 'John H.', family: 'Hubbard' }, { given: 'Barbara Burke', family: 'Hubbard' } ],
      title: 'Student Solution Manual to accompany the 5th edition of Vector Calculus, Linear Algebra, and Differential Forms: A Unified Approach',
      medium: 'Softcover',
      publisher: 'Matrix Editions',
      'publisher-place': 'Ithaca, NY',
      issued: { 'date-parts': [ [ 2015 ] ] },
      'number-of-pages': 'iv, 307',
      ISBN: '978-0-9715766-9-8',
      language: 'en-US',
      note: 'Detailed solutions to every odd-numbered exercise. An instructor solution manual is available to instructors on request; the publisher does not specify its coverage.',
      URL: 'https://matrixeditions.com/#SSM5',
      accessed: { 'date-parts': [ [ 2026, 10, 4 ] ] },
      custom: {
        URL: [
          { link: 'https://library.kaist.ac.kr/search/kaistSearchQRCode.do?bibctrlno=908627&deviceType=mobile&se=b0&ty=B', display_text: 'KAIST Library' },
          { link: 'https://matrixeditions.com/errata.html', display_text: 'Errata' },
          { link: 'https://matrixeditions.com/VC5.Preface.pdf', display_text: 'Preface' },
        ],
        variant: [
          {
            type: 'book',
            medium: 'PDF eBook',
            note: 'Requires the Javelin PDF reader and an authorization code; limited to two devices; printing disabled.',
            URL: 'https://matrixeditions.com/#SSM5',
            custom: {
              URL: [ { link: 'https://matrixeditions.com/Drumlin.html', display_text: 'Matrix Editions eBooks' } ],
            },
          },
        ],
      } satisfies CSL.Custom,
    },
  },
] satisfies types_data.Entry[]

export function resolve_relations(): void {
  const material: types_data.Material = entries[0]!.material
  material.custom!.companion = catalog.filter(
    item => item.type === 'book'
      && item.title === 'Vector Calculus, Linear Algebra, and Differential Forms'
      && item.edition === 5
      && item.author?.some(author => author.family === 'Hubbard' && author.given === 'John H.')
      && item.author?.some(author => author.family === 'Hubbard' && author.given === 'Barbara Burke'),
    { count: 1 }
  )
}
