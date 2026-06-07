import * as data_type from '@/types/data.ts'
import * as catalog from '@/data/materials/catalog.ts'
import '@/data/courses/import course materials.ts'

export const Mathematical_Logic = {
  canonical_name: '数理逻辑',
  name: [ '数理逻辑' ],
  tag: [ '基础必修' ],
  material: {
    text: {
      zh: [
        catalog.get('屈婉玲 离散数学'),
        catalog.get('屈婉玲 离散数学教程'),
      ],
      en: [
        catalog.get('Logic and Proof'),
      ]
    },
    open_course: {
      zh: [
        catalog.get('北京大学 离散数学 公开课'),
      ],
    },
    guide: {
      zh: [
        catalog.get('屈婉玲 离散数学习题解析'),
        catalog.get('屈婉玲 离散数学学习指导与习题解析'),
      ],
    },
    reference: {
      text: {
        zh: [],
        en: [
          catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
          catalog.get('M. Huth and M. Ryan, Logic in Computer Science'),
        ],
      },
      guide: {
        en: [
          catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
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
        catalog.get('屈婉玲 离散数学'),
        catalog.get('屈婉玲 离散数学教程'),
      ],
      en: [
        catalog.get('Logic and Proof'),
      ]
    },
    open_course: {
      zh: [
        catalog.get('北京大学 离散数学 公开课'),
      ],
    },
    guide: {
      zh: [
        catalog.get('屈婉玲 离散数学习题解析'),
        catalog.get('屈婉玲 离散数学学习指导与习题解析'),
      ],
    },
    reference: {
      text: {
        en: [
          catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
        ],
      },
      guide: {
        en: [
          catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
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
        catalog.get('屈婉玲 离散数学'),
        catalog.get('屈婉玲 离散数学教程'),
      ],
      en: [
        catalog.get('D. B. West, Introduction to Graph Theory'),
        catalog.get('J. M. Harris et al., Combinatorics and Graph Theory'),
      ],
    },
    open_course: {
      zh: [
        catalog.get('北京大学 离散数学 公开课'),
      ],
    },
    guide: {
      zh: [
        catalog.get('屈婉玲 离散数学习题解析'),
        catalog.get('屈婉玲 离散数学学习指导与习题解析'),
      ],
    },
    reference: {
      text: {
        zh: [
          catalog.get('王树禾 图论'),
        ],
        en: [
          catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
          catalog.get('J. A. Bondy and U. S. R. Murty, Graph Theory'),
        ],
      },
      guide: {
        en: [
          catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
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
        catalog.get('屈婉玲 离散数学'),
        catalog.get('屈婉玲 离散数学教程'),
        catalog.get('丘维声 近世代数'),
      ],
      en: [
        catalog.get('J. A. Beachy and W. D. Blair, Abstract Algebra'),
        catalog.get('T. W. Judson, AATA'),
      ],
    },
    open_course: {
      zh: [
        catalog.get('北京大学 离散数学 公开课'),
      ],
    },
    guide: {
      zh: [
        catalog.get('屈婉玲 离散数学习题解析'),
        catalog.get('屈婉玲 离散数学学习指导与习题解析'),
      ],
    },
    reference: {
      text: {
        zh: [
          catalog.get('席南华 基础代数3'),
          catalog.get('冯克勤 等 近世代数引论'),
          catalog.get('Kostrikin, 代数学引论3'),
        ],
        en: [
          catalog.get('D. S. Dummit and R. M. Foote, Abstract Algebra'),
          catalog.get('S. Lang, Undergraduate Algebra'),
          catalog.get('S. Lang, Algebra'),
        ],
      },
      problem_set: {
        zh: [
          catalog.get('Kostrikin, 代数学习题集'),
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
        catalog.get('屈婉玲 离散数学'),
        catalog.get('屈婉玲 离散数学教程'),
      ],
      en: [
        catalog.get('J. M. Harris et al., Combinatorics and Graph Theory'),
      ]
    },
    open_course: {
      zh: [
        catalog.get('北京大学 离散数学 公开课'),
      ],
    },
    guide: {
      zh: [
        catalog.get('屈婉玲 离散数学习题解析'),
        catalog.get('屈婉玲 离散数学学习指导与习题解析'),
      ],
    },
    reference: {
      text: {
        en: [
          catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
        ],
      },
      guide: {
        en: [
          catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
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
        catalog.get('屈婉玲 离散数学'),
      ],
      en: [
        catalog.get('Logic and Proof'),
      ],
    },
    video: [],
    guide: {
      zh: [
        catalog.get('屈婉玲 离散数学学习指导与习题解析')
      ],
    },
    reference: {
      text: {
        en: [
          catalog.get('K. H. Rosen, Discrete Mathematics and Its Applications'),
        ],
      },
      guide: {
        en: [
          catalog.get('K. H. Rosen, Student\'s Solutions Guide for Discrete Mathematics and Its Applications'),
        ],
      },
    },
  }
} satisfies data_type.Course
