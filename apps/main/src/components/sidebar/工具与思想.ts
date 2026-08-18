import type { SidebarItem } from "@/types/starlight.ts";
import * as release_stages from '../release_stages.ts'

export const Tools_and_Ideas = {
  label: '工具与思想',
  translations: {
    en: 'Tools and Ideas',
  },
  items: [
    {
      label: '概述',
      translations: {
        en: 'Overview',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '养成自学的习惯',
      translations: {
        en: 'Forming the Habit of Self-Learning',
      },
      slug: 'tools-and-ideas/forming-the-habit-of-self-learning',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '计算机',
      translations: {
        en: 'Computers'
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '电子书',
      translations: {
        en: 'Ebooks',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '备份',
      translations: {
        en: 'Backups',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '免费/低价云服务',
      translations: {
        en: 'Free/Cost-Efficient Cloud Services',
      },
      slug: 'tools-and-ideas/free-and-cost-efficient-cloud-services',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-beta', en: 'blank', })
      },
    },
    {
      label: '绝不为培训班付费',
      translations: {
        en: 'Never Pay for Bootcamps',
      },
      slug: 'tools-and-ideas/never-pay-for-bootcamps',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '用钱换时间',
      translations: {
        en: 'Save Time with Money',
      },
      slug: 'tools-and-ideas/save-time-with-money',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-beta', en: 'blank', })
      },
    },
    {
      label: 'EDU 邮箱',
      translations: {
        en: 'Edu Mailboxes',
      },
      slug: 'tools-and-ideas/edu-mails',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-beta', en: 'blank', })
      },
    },
    {
      label: '你的记忆是不可靠的',
      translations: {
        en: 'Your Memory Is Unreliable',
      },
      slug: 'tools-and-ideas/your-memory-is-unreliable',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '记笔记',
      translations: {
        en: 'Taking Notes',
      },
      slug: 'tools-and-ideas/taking-notes',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '优先文字材料而非视频',
      translations: {
        en: 'Text Materials over Videos',
      },
      slug: 'tools-and-ideas/text-materials-over-videos',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '练习',
      translations: {
        en: 'Do Practices',
      },
      slug: 'tools-and-ideas/do-practices',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '了解行业',
      translations: {
        en: 'Know about the Entire Industry',
      },
      slug: 'tools-and-ideas/know-about-the-entire-industry',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '优质信息源',
      translations: {
        en: 'Excellent Information Sources',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      }
    },
    {
      label: '熟练使用生产力工具',
      translations: {
        en: 'Get Familiar with Productive Tools',
      },
      slug: 'tools-and-ideas/get-familiar-with-productive-tools',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-beta', en: 'blank', })
      },
    },
    {
      label: '自动化',
      translations: {
        en: 'Automation',
      },
      slug: 'tools-and-ideas/automation',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-beta', en: 'blank', })
      },
    },
    {
      label: '善用人工智能',
      translations: {
        en: 'Make Good Use of AI',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
  ],
} satisfies SidebarItem
