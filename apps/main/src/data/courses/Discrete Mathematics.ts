import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'
import * as util from '@/util.ts'

export const Mathematical_Logic = {
  canonical_name: '数理逻辑',
  name: [ '数理逻辑' ],
  tag: [ '基础必修' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学教程'), { max_count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Logic and Proof'), { max_count: 1 }),
      ]
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '屈' && lecturer.given === '婉玲') && item['event-place'] === '北京大学', { max_count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学习题解析'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学学习指导与习题解析'), { max_count: 1 }),
      ],
    },
    reference: {
      text: {
        zh: [],
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Discrete Mathematics and Its Applications'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Huth') && item.title?.startsWith('Logic in Computer Science'), { max_count: 1 }),
        ],
      },
      guide: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Student\'s Solutions Guide for Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
    },
  }
} satisfies data_type.Course

export const Set_Theory = {
  canonical_name: '集合论',
  name: [ '集合论' ],
  tag: [ '基础必修' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学教程'), { max_count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Logic and Proof'), { max_count: 1 }),
      ]
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '屈' && lecturer.given === '婉玲') && item['event-place'] === '北京大学', { max_count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学习题解析'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学学习指导与习题解析'), { max_count: 1 }),
      ],
    },
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
      guide: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Student\'s Solutions Guide for Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
    },
  }
} satisfies data_type.Course

export const Graph_Theory = {
  canonical_name: '图论',
  name: [ '图论' ],
  tag: [ '基础必修' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学教程'), { max_count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.author?.some(author => author.family === 'West') && util.ieq(item.title!, 'Introduction to Graph Theory'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Harris') && util.ieq(item.title!, 'Combinatorics and Graph Theory'), { max_count: 1 }),
      ],
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '屈' && lecturer.given === '婉玲') && item['event-place'] === '北京大学', { max_count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学习题解析'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学学习指导与习题解析'), { max_count: 1 }),
      ],
    },
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.author?.some(author => author.family === '王' && author.given === '树禾') && util.ieq(item.title!, '图论'), { max_count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Discrete Mathematics and Its Applications'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Bondy') && util.ieq(item.title!, 'Graph Theory'), { max_count: 1 }),
        ],
      },
      guide: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Student\'s Solutions Guide for Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
    },
  }
} satisfies data_type.Course

export const Abstract_Algebra = {
  canonical_name: '抽象代数',
  name: [ '抽象代数', '近世代数', '现代代数', ],
  tag: [ '基础选修' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学教程'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '丘' && author.given === '维声') && util.ieq(item.title!, '近世代数'), { max_count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.author?.some(author => author.family === 'Beachy') && util.ieq(item.title!, 'Abstract Algebra'), { max_count: 1 }),
        catalog.get('T. W. Judson, AATA'),
      ],
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '屈' && lecturer.given === '婉玲') && item['event-place'] === '北京大学', { max_count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学习题解析'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学学习指导与习题解析'), { max_count: 1 }),
      ],
    },
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.author?.some(author => author.family === '席' && author.given === '南华') && util.ieq(item.title!, '基础代数') && item.volume === 3, { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '冯' && author.given === '克勤') && util.ieq(item.title!, '近世代数引论'), { max_count: 1 }),
          ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '代数学引论') && item.volume === 3, { max_count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Dummit') && util.ieq(item.title!, 'Abstract Algebra'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Lang') && util.ieq(item.title!, 'Undergraduate Algebra'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Lang') && util.ieq(item.title!, 'Algebra'), { max_count: 1 }),
        ],
      },
      problem_set: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '代数学习题集'), { max_count: 1 }),
        ],
      },
    },
  }
} satisfies data_type.Course

export const Combinatorics = {
  canonical_name: '组合学',
  name: [ '组合学', '组合数学', ],
  tag: [ '基础选修' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学教程'), { max_count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.author?.some(author => author.family === 'Harris') && util.ieq(item.title!, 'Combinatorics and Graph Theory'), { max_count: 1 }),
      ]
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '屈' && lecturer.given === '婉玲') && item['event-place'] === '北京大学', { max_count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学习题解析'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学学习指导与习题解析'), { max_count: 1 }),
      ],
    },
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
      guide: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Student\'s Solutions Guide for Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
    },
  }
} satisfies data_type.Course

export const Number_Theory = {
  canonical_name: '数论',
  name: [ '数论' ],
  tag: [ '基础选修' ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学'), { max_count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Logic and Proof'), { max_count: 1 }),
      ],
    },
    video: [],
    guide: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '屈' && author.given === '婉玲') && util.ieq(item.title!, '离散数学学习指导与习题解析'), { max_count: 1 }),
      ],
    },
    reference: {
      text: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
      guide: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Rosen') && util.ieq(item.title!, 'Student\'s Solutions Guide for Discrete Mathematics and Its Applications'), { max_count: 1 }),
        ],
      },
    },
  }
} satisfies data_type.Course
