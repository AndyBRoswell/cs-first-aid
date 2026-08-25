import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

const open_courses = [
  {
    id: [],
    material: {
      type: 'document',
      title: 'Lecture 15: Color and Perception',
      number: 15,
      author: [ { given: 'Ren', family: 'Ng' }, { given: 'James', family: "O'Brien" } ],
      contributor: [
        { given: 'Kayvon', family: 'Fatahalian' },
        { given: 'David', family: 'Forsyth' },
        { given: 'Pat', family: 'Hanrahan' },
        { given: 'Angjoo', family: 'Kanazawa' },
        { given: 'Steve', family: 'Marschner' },
        { given: 'Ben', family: 'Mildenhall' },
        { given: 'Mark', family: 'Pauly' },
        { given: 'Weilun', family: 'Sun' },
        { given: 'Lingqi', family: 'Yan' },
      ],
      'collection-title': 'CS 184/284A: Foundations of Computer Graphics',
      publisher: 'University of California, Berkeley',
      'publisher-place': 'Berkeley, CA',
      issued: { 'date-parts': [ [ 2026 ] ], season: 3 },
      language: 'en-US',
      URL: 'https://cs184.eecs.berkeley.edu/fa26/assets/lectures/15-Color-and-Perception.pdf',
      accessed: { 'date-parts': [ [ 2026, 8, 24 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]

export { open_courses as entries }