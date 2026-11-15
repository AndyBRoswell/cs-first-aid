import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import tailwindcss from '@tailwindcss/vite';
import package_json from "./package.json" with { type: 'json' }
import { locales, sidebar } from './src/config/starlight.ts'
import * as Vite_plugin from '@cs-first-aid/bibkit/tools/Vite plugin'
import * as markdown_remark from '@astrojs/markdown-remark'
import remarkMath from 'remark-math'
import { convert_UnicodeMath } from './src/plugins/convert_UnicodeMath.ts'

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      __meta: JSON.stringify({
        app: {
          version: package_json.version,
          build_time: new Date().toISOString(),

        }
      })
    },
    plugins: [
      Vite_plugin.csl_text(),
      tailwindcss(),
    ]
  },
  markdown: {
    processor: markdown_remark.unified({
      remarkPlugins: [ remarkMath, convert_UnicodeMath ],
      rehypePlugins: [],
    })
  },
  integrations: [
    starlight({
      title: {
        'zh-CN': '计算机科学急救指南',
        en: 'CS First Aid',
      },
      tableOfContents: {
        minHeadingLevel: 1,
        maxHeadingLevel: 6,
      },
      components: {
        PageTitle: './src/components/PageTitle.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/AndyBRoswell/cs-first-aid' },
      ],
      customCss: [
        './src/styles/docs.css',
      ],
      locales,
      sidebar,
      lastUpdated: true,
    })
  ],
});
