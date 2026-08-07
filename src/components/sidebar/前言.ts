import type { SidebarItem } from "@/types/starlight.ts";
import * as badges from '../badges.ts'

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
        'data-badges': badges.to_HTML_attr([
          'blank',
        ])
      },
    },
    {
      label: '哪些是计算机专业',
      translations: {
        en: 'Which Majors Are Considered Computer Science',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          'blank',
        ])
      },
    },
    {
      label: '什么样的人可以/应该报读计算机专业',
      translations: {
        en: 'Which People Can/Should Select Computer Science Majors',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          'blank',
        ])
      },
    },
    {
      label: '什么样的人不应该报读计算机专业',
      translations: {
        en: 'Which People Should NOT Select Computer Science Majors',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          'blank',
        ])
      },
    },
    {
      label: '什么样的人应该学习计算机科学',
      translations: {
        en: 'Which People Should Learn Computer Science',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          'blank',
        ])
      },
    },
    {
      label: '本项目的指导原则',
      translations: {
        en: 'Principles of This Project',
      },
      slug: '',
      attrs: {
        'data-badges': badges.to_HTML_attr([
          'blank',
        ])
      },
    }
  ],
} satisfies SidebarItem