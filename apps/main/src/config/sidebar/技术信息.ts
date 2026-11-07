import * as release_stages from '@/UI/release_stages.ts'

export const Technical_Information = {
  label: '技术信息',
  translations: {
    en: 'Technical Information',
  },
  items: [
    {
      label: '概述',
      translations: {
        en: 'Overview',
      },
      slug: 'technical-information',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-dev', en: 'blank', })
      },
    },
    {
      label: '需求分析',
      translations: {
        en: 'Requirement Analysis',
      },
      slug: 'technical-information/requirement-analysis',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-dev', en: 'blank', })
      },
    },
    {
      label: '架构与设计决策',
      translations: {
        en: 'Architecture and Design Decisions',
      },
      slug: 'technical-information/architecture-and-design-decisions',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-dev', en: 'blank', })
      },
    },
    {
      label: '需求规格',
      translations: {
        en: 'Requirement Specifications',
      },
      slug: 'technical-information/requirement-specifications',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '测试',
      translations: {
        en: 'Testing',
      },
      slug: 'technical-information/testing',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '构建与发布',
      translations: {
        en: 'Build and Release',
      },
      slug: 'technical-information/build-and-release',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: 'AI 的使用',
      translations: {
        en: 'The Usage of AI',
      },
      slug: 'technical-information/ai-usage',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '路线图',
      translations: {
        en: 'Roadmap',
      },
      slug: 'technical-information/roadmap',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '参与贡献',
      translations: {
        en: 'Contributing',
      },
      slug: 'technical-information/contributing',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '合规',
      translations: {
        en: 'Compliance',
      },
      slug: 'technical-information/compliance',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '统计数据',
      translations: {
        en: 'Statistics',
      },
      slug: 'technical-information/statistics',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
  ]
}
