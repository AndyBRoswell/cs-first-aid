import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    starlight({
      title: {
        'zh-CN': 'CS 自救指南',
        en: 'CS First Aid',
      },
      components: {
        PageTitle: './src/components/PageTitle.astro',
      },
      customCss: [
        './src/styles/docs.css',
      ],
      sidebar: [
        // 'preface/preface',
        {
          label: '前言',
          translations: {
            'en': 'Preface',
          },
          // link: '/preface/preface/',
          slug: 'preface/preface',
        },
        {
          label: '课程、教科书与参考资料',
          translations: {
            en: 'Courses, Textbooks and References',
          },
          items: [
            // 'courses-textbooks-and-references',
            // {
            //   label: '课程',
            //   autogenerate: { directory: 'Courses, Textbooks and References/Courses' }
            // },
            // 'courses-textbooks-and-references/courses/calculus',
            // 'courses-textbooks-and-references/courses/mathematical-analysis',
            {
              label: '概览',
              translations: {
                'en': 'Overview',
              },
              // link: '/courses-textbooks-and-references/index/',
              slug: 'courses-textbooks-and-references',
            },
            {
              label: '微积分',
              translations: {
                'en': 'Calculus',
              },
              // link: '/courses-textbooks-and-references/courses/calculus',
              slug: 'courses-textbooks-and-references/courses/calculus',
            },
            {
              label: '数学分析',
              translations: {
                'en': 'Mathematical Analysis',
              },
              // link: '/courses-textbooks-and-references/courses/mathematical-analysis/',
              slug: 'courses-textbooks-and-references/courses/mathematical-analysis',
            }
          ]
        }
      ],
      // defaultLocale: 'zh-CN',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
        en: {
          label: 'English',
          lang: 'en',
        }
      }
    })
  ],
  experimental: {
    rustCompiler: true,
  },
});