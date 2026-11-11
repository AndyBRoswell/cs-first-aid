import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'post-weblog',
      title: 'MSVC Build Tools Version 14.51 Release Candidate Now Available',
      author: [ { given: 'Eric', family: 'Brumer' } ],
      'container-title': 'C++ Team Blog',
      publisher: 'Microsoft',
      issued: { 'date-parts': [ [ 2026, 4, 14 ] ] },
      language: 'en',
      URL: 'https://devblogs.microsoft.com/cppblog/msvc-build-tools-version-14-51-release-candidate-now-available/',
      accessed: { 'date-parts': [ [ 2026, 11, 11 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
