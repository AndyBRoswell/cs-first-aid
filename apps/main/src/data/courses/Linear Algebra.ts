import * as data_type from '../../../../../packages/bibkit/src/types/data.ts'
import * as catalog from '../../../../../packages/bibkit/src/catalog.ts'
import '@/data/courses/import course materials.ts'
import * as util from '../../../../../packages/common/util.ts'

export const I_info = {
  canonical_name: '线性代数I',
  name: [ '线性代数I', ],
  tag: [ '基础必修', ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '蓝' && author.given === '以中') && util.ieq(item.title!, '高等代数简明教程') && item.volume === 1, { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '丘' && author.given === '维声') && util.ieq(item.title!, '简明线性代数'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '丘' && author.given === '维声') && util.ieq(item.title!, '高等代数') && item.volume === 1, { max_count: 2 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '丘' && author.given === '维声') && util.ieq(item.title!, '高等代数学习指导书') && item.volume === 1, { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '陈' && author.given === '发来') && util.ieq(item.title!, '线性代数 I'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '陈' && author.given === '发来') && util.ieq(item.title!, '线性代数与解析几何'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '谢' && author.given === '启鸿') && (util.ieq(item.title!, '高等代数学') || util.ieq(item.title!, '高等代数')), { max_count: 4 }),
      ],
      en: [
        catalog.get('ILA6'),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Lay') && item.title?.startsWith('Linear Algebra and Its Applications'), { max_count: 1 }),
        catalog.get('LADW'),
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, 'Interactive Linear Algebra'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Shores') && util.ieq(item.title!, 'Applied Linear Algebra and Matrix Analysis'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Saff') && util.ieq(item.title!, 'Matrix Fundamentals'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Leon') && item.title?.startsWith('Linear Algebra with Applications'), { max_count: 1 }),
      ],
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '线性代数的几何意义'), { max_count: 1 }),
      ],
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '丘' && lecturer.given === '维声') && item['event-place'] === '清华大学', { max_count: 1 }),
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '陈' && lecturer.given === '发来'), { max_count: 1 }),
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '谢' && lecturer.given === '启鸿') && item['event-place'] === '复旦大学', { max_count: 1 }),
      ],
    },
    problem_set: [],
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.author?.some(author => author.family === '李' && author.given === '炯生') && util.ieq(item.title!, '线性代数'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '席' && author.given === '南华') && util.ieq(item.title!, '基础代数') && item.volume === 1, { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '李' && author.given === '尚志') && util.ieq(item.title!, '线性代数（数学专业用）'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '张' && author.given === '贤科') && util.ieq(item.title!, '高等代数学'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '张' && author.given === '贤科') && util.ieq(item.title!, '高等线性代数'), { max_count: 1 }),
          ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '代数学引论') && item.volume === 1, { max_count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Artin') && util.ieq(item.title!, 'Algebra'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Lang') && util.ieq(item.title!, 'Linear Algebra'), { max_count: 1 }),
        ],
      },
      guide: {
        zh: [
          ...catalog.filter(item => item.author?.some(author => author.family === '李' && author.given === '尚志') && util.ieq(item.title!, '线性代数学习指导'), { max_count: 1 }),
        ],
      },
      problem_set: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '代数学习题集'), { max_count: 1 }),
        ],
      },
      video: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.author?.some(author => author.literal === '分析学爱好者') && util.ieq(item.title!, '我为什么推荐你使用丘维声学习高等代数'), { max_count: 1 }),
      ],
    }
  }
} satisfies data_type.Course

export const II_info = {
  canonical_name: '线性代数II',
  name: [ '线性代数II', ],
  tag: [ '基础选修', ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '蓝' && author.given === '以中') && util.ieq(item.title!, '高等代数简明教程') && item.volume === 2, { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '丘' && author.given === '维声') && util.ieq(item.title!, '简明线性代数'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '丘' && author.given === '维声') && util.ieq(item.title!, '高等代数') && item.volume === 2, { max_count: 2 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '丘' && author.given === '维声') && util.ieq(item.title!, '高等代数学习指导书') && item.volume === 2, { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '谢' && author.given === '启鸿') && (util.ieq(item.title!, '高等代数学') || util.ieq(item.title!, '高等代数')), { max_count: 4 }),
      ],
      en: [
        catalog.get('LADR'),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Meyer') && util.ieq(item.title!, 'Matrix Analysis and Applied Linear Algebra'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Horn') && util.ieq(item.title!, 'Matrix Analysis'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Garcia') && util.ieq(item.title!, 'Matrix Mathematics'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Trefethen') && util.ieq(item.title!, 'Numerical Linear Algebra'), { max_count: 1 }),
      ]
    },
    guide: {
      zh: [
        ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '线性代数的几何意义'), { max_count: 1 }),
      ],
      en: [
        ...catalog.filter(item => item.author?.some(author => author.family === 'Meyer') && util.ieq(item.title!, 'Matrix Analysis and Applied Linear Algebra: Study and Solutions Guide'), { max_count: 1 }),
      ],
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '丘' && lecturer.given === '维声') && item['event-place'] === '清华大学', { max_count: 1 }),
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '谢' && lecturer.given === '启鸿') && item['event-place'] === '复旦大学', { max_count: 1 }),
      ],
    },
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.author?.some(author => author.family === '李' && author.given === '炯生') && util.ieq(item.title!, '线性代数'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '席' && author.given === '南华') && util.ieq(item.title!, '基础代数') && item.volume === 2, { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '李' && author.given === '尚志') && util.ieq(item.title!, '线性代数（数学专业用）'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '张' && author.given === '贤科') && util.ieq(item.title!, '高等代数学'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === '张' && author.given === '贤科') && util.ieq(item.title!, '高等线性代数'), { max_count: 1 }),
          ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '代数学引论') && item.volume === 2, { max_count: 1 }),
        ],
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Lang') && util.ieq(item.title!, 'Linear Algebra'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Artin') && util.ieq(item.title!, 'Algebra'), { max_count: 1 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Lax') && util.ieq(item.title!, 'Linear Algebra and Its Applications'), { max_count: 1 }),
        ],
      },
      guide: {
        zh: [
          ...catalog.filter(item => item.author?.some(author => author.family === '李' && author.given === '尚志') && util.ieq(item.title!, '线性代数学习指导'), { max_count: 1 }),
        ],
      },
      video: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.author?.some(author => author.literal === '分析学爱好者') && util.ieq(item.title!, '我为什么推荐你使用丘维声学习高等代数'), { max_count: 1 }),
      ],
      problem_set: {
        zh: [
          ...catalog.filter(item => item.type === 'book' && util.ieq(item.title!, '代数学习题集'), { max_count: 1 }),
        ],
      },
      other: {
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Lu' && author.given === 'Jun') && util.ieq(item.title!, 'Matrix Decomposition and Applications'), { max_count: 1 }),
        ],
      }
    },
  }
} satisfies data_type.Course
