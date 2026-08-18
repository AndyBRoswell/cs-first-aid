import type { SidebarItem } from "@/types/starlight.ts";
import * as release_stages from '../release_stages.ts'

export const Critical_Goals_and_Time_Windows = {
  label: '需要尽早开始或完成的事项',
  translations: {
    en: 'Things Needed to Be Started or Done as Soon as Possible',
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
      label: '我应该参加……吗？',
      translations: {
        en: 'Should I Participate in ...?',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '决定毕业去向',
      translations: {
        en: 'Determine Your Career Path',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '实习',
      translations: {
        en: 'Internships',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '志愿工作',
      translations: {
        en: 'Voluntary Work',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '外语',
      translations: {
        en: 'Foreign Languages',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '选课',
      translations: {
        en: 'Course Selection',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '课外积累',
      translations: {
        en: 'Extracurricular Accumulations',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '驾照',
      translations: {
        en: 'Driving Licenses',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
  ],
} satisfies SidebarItem
