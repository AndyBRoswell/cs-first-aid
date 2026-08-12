import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import '@/data/courses/import course materials.ts'
import * as util from '@cs-first-aid/util'

export const info = {
  canonical_name: '数学分析',
  name: [ '数学分析', ],
  tag: [ '基础选修', ],
  material: {
    text: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '史' && author.given === '济怀') && util.ieq(item.title!, '数学分析教程'), { max_count: 4 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '陈' && author.given === '纪修') && util.ieq(item.title!, '数学分析'), { max_count: 4 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '徐' && author.given === '森林') && item.author?.some(author => author.family === '薛' && author.given === '春华') && util.ieq(item.title!, '数学分析'), { max_count: 3 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '程' && author.given === '艺') && util.ieq(item.title!, '数学分析讲义'), { max_count: 3 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '张' && author.given === '筑生') && util.ieq(item.title!, '数学分析新讲（重排本）'), { max_count: 3 }),
      ],
      en: [
        ...catalog.filter(item => item.author?.some(author => author.family === 'Hunter') && item.author?.some(author => author.family === 'Nachtergaele') && util.ieq(item.title!, 'Applied Analysis'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Abbott') && util.ieq(item.title!, 'Understanding Analysis'), { max_count: 1 }),
        ...catalog.filter(item => item.author?.some(author => author.family === 'Pugh') && util.ieq(item.title!, 'Real Mathematical Analysis'), { max_count: 1 }),
      ],
    },
    open_course: {
      zh: [
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '史' && lecturer.given === '济怀') && item['event-place'] === '中国科学技术大学少年班学院', { max_count: 1 }),
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '陈' && lecturer.given === '纪修') && item['event-place'] === '复旦大学', { max_count: 1 }),
        ...catalog.filter(item => item.type === 'motion_picture' && item.custom?.lecturer?.some(lecturer => lecturer.family === '程' && lecturer.given === '艺') && item['event-place'] === '中国科学技术大学少年班学院', { max_count: 2 }),
      ],
    },
    problem_set: {
      zh: [
        ...catalog.filter(item => item.author?.some(author => author.family === '陈' && author.given === '纪修') && util.ieq(item.title!, '数学分析习题全解指南'), { max_count: 4 }),
        ...catalog.filter(item => item.author?.some(author => author.family === '徐' && author.given === '森林') && util.ieq(item.title!, '数学分析精选习题全解'), { max_count: 2 }),
      ],
    },
    reference: {
      text: {
        zh: [
          ...catalog.filter(item => item.author?.some(author => author.family === '何' && author.given === '琛') && util.ieq(item.title!, '数学分析'), { max_count: 3 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Зорич') && util.ieq(item.title!, '数学分析'), { max_count: 2 }),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Фихтенгольц') && util.ieq(item.title!, '微积分学教程'), { max_count: 3 }),
        ],
        en: [
          ...catalog.filter(item => item.author?.some(author => author.family === 'Apostol') && item.title?.startsWith('Mathematical Analysis'), { max_count: 1 }),
          catalog.get('Rudin PMA'),
          ...catalog.filter(item => item.author?.some(author => author.family === 'Courant') && item.author?.some(author => author.family === 'John') && util.ieq(item.title!, 'Introduction to Calculus and Analysis'), { max_count: 3 }),
        ],
      },
      video: {
        zh: [
          ...catalog.filter(item => item.type === 'motion_picture' && item.author?.some(author => author.literal === '我真的不懂分析') && util.ieq(item.title!, '如何选择一本适合你的《数学分析》教科书？'), { max_count: 1 }),
          ...catalog.filter(item => item.type === 'motion_picture' && item.author?.some(author => author.literal === '分析学爱好者') && util.ieq(item.title!, '对常见数分课本&习题集的快速版点评'), { max_count: 1 }),
          ...catalog.filter(item => item.type === 'motion_picture' && item.author?.some(author => author.literal === '分析学爱好者') && util.ieq(item.title!, '尽管数分教材千千万，但我却建议你学陈纪修'), { max_count: 1 }),
          ...catalog.filter(item => item.type === 'motion_picture' && item.author?.some(author => author.literal === '分析学爱好者') && util.ieq(item.title!, '我为何不建议初学者用清华丘班数分讲义学数分'), { max_count: 1 }),
        ],
      },
    },
  }
} satisfies types_data.Course