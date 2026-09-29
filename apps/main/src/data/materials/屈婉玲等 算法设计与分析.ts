import * as types_data from '@cs-first-aid/bibkit/types/data'
import * as CSL from '@cs-first-aid/bibkit/CSL'

export const entries = [
  {
    id: [],
    material: {
      type: 'book',
      title: '算法设计与分析',
      author: [ { family: '屈', given: '婉玲' }, { family: '刘', given: '田' }, { family: '张', given: '立昂' }, { family: '王', given: '捍贫' } ],
      edition: 3,
      'printing-number': '3-11',
      medium: 'Paperback',
      publisher: '清华大学出版社',
      issued: { 'date-parts': [ [ 2023, 1, 1 ] ] },
      ISBN: '9787302612391',
      'number-of-pages': 299,
      'collection-title': '21世纪大学本科计算机专业系列教材',
      language: 'zh-CN',
      URL: 'https://www.tup.com.cn/booksCenter/book_09721601.html',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        'printing-date': { 'date-parts': [ [ 2026, 8, 4 ] ] },
        URL: [ { link: 'https://www.sanmin.com.tw/product/index/011702358', display_text: '三民網路書店' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Material,
  },
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: '算法设计与分析',
      publisher: '中国大学 MOOC',
      'event-place': '北京大学',
      language: 'zh-CN',
      URL: 'https://www.icourse163.org/course/PKU-1002525003',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        lecturer: [ { family: '汪', given: '小林' }, { family: '蒋', given: '婷婷' }, { family: '罗', given: '国杰' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Video,
  },
  {
    id: [],
    material: {
      type: 'motion_picture',
      title: '〖北大公开课〗 算法设计与分析 屈婉玲教授 （76p）',
      publisher: 'bilibili',
      'event-place': '北京大学',
      issued: { 'date-parts': [ [ 2016, 11, 17 ] ] },
      language: 'zh-CN',
      URL: 'https://www.bilibili.com/video/BV1Ls411W7PB/',
      accessed: { 'date-parts': [ [ 2026, 9, 29 ] ] },
      custom: {
        lecturer: [ { family: '屈', given: '婉玲' } ],
      } satisfies CSL.Custom,
    } satisfies types_data.Video,
  },
] satisfies types_data.Entry[]
