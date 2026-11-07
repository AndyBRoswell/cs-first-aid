import * as types_data from '@cs-first-aid/bibkit/types/data'

export const entries = [
  {
    id: [],
    material: {
      type: 'webpage',
      title: '什么是 SDLC（软件开发生命周期）？',
      author: [ { literal: 'Amazon Web Services' } ],
      'container-title': 'Amazon Web Services',
      language: 'zh-CN',
      URL: 'https://aws.amazon.com/cn/what-is/sdlc/',
      accessed: { 'date-parts': [ [ 2026, 10, 30 ] ] },
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'webpage',
      title: 'What is SDLC (Software Development Lifecycle)?',
      author: [ { literal: 'Amazon Web Services' } ],
      'container-title': 'Amazon Web Services',
      language: 'en-US',
      URL: 'https://aws.amazon.com/what-is/sdlc/',
      accessed: { 'date-parts': [ [ 2026, 11, 7 ] ] },
    } satisfies types_data.Material,
  },
] satisfies types_data.Entry[]
