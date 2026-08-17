import type { SidebarItem } from "@/types/starlight.ts";
import * as release_stages from '../release_stages.ts'

export const Preface = {
  label: '前言',
  translations: {
    'en': 'Preface',
  },
  items: [
    {
      label: '我为何撰写本文',
      translations: {
        en: 'Why I Wrote This Article',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    },
    {
      label: '哪些是计算机专业',
      translations: {
        en: 'Which Majors Are Considered Computer Science',
      },
      slug: 'preface/which-majors-are-considered-computer-science',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-alpha', en: 'blank', })
      },
    },
    {
      label: '什么样的人适合计算机行业？什么人不适合？',
      translations: {
        en: 'Which People Are Suited for Computer Industry? Which People Are Not?',
      },
      slug: 'preface/which-people-are-not-suited-for-computer-industry',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-dev', en: 'blank', })
      },
    },
    {
      label: '什么样的人应该学习计算机科学',
      translations: {
        en: 'Which People Should Learn Computer Science',
      },
      slug: 'preface/which-people-should-learn-computer-science',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': '2026.1.0-dev', en: 'blank', })
      },
    },
    {
      label: '本项目的指导原则',
      translations: {
        en: 'Principles of This Project',
      },
      slug: '',
      attrs: {
        'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
      },
    }
  ],
} satisfies SidebarItem
