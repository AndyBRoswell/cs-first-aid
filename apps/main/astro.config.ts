import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import tailwindcss from '@tailwindcss/vite';
import fast_glob from 'fast-glob'
import package_json from "./package.json" with { type: 'json' }
import { locales, sidebar } from './src/config/starlight.ts'
import * as Vite_plugin from '@cs-first-aid/bibkit/tools/Vite plugin'
import * as unist_util_visit from 'unist-util-visit'
// @ts-ignore: unicodemathml doesn't have type hints
import * as UnicodeMathML from 'unicodemathml'
import * as markdown_remark from '@astrojs/markdown-remark'
import remarkMath from 'remark-math'

/**
 * @deprecated
 * This plugin is no longer used. See `@/data/courses/import course materials.ts`.
 * Previously `import.meta.glob` didn't work due to unknown reasons so this Vite plugin was used as a workaround.
 */
function import_course_materials() {
  const virtualId = 'virtual:import-course-materials'
  const resolvedId = '\0' + virtualId
  return {
    name: 'vite-plugin-import-course-materials',
    resolveId(id: string) {
      if (id === virtualId) { return resolvedId }
      return
    },
    load(id: string) {
      if (id === resolvedId) {
        const course_materials = fast_glob.sync('./src/data/materials/*.ts')
        return course_materials.map(path => `import ${JSON.stringify(path)}`).join('\n')
      }
      return
    }
  }
}

function convert_UnicodeMath() {
  return (tree: any) => {
    unist_util_visit.visit(tree, ['inlineMath', 'math'], node => {
      node.value = UnicodeMathML.convertUnicodeMathToMathML(node.value, { displaystyle: node.type === 'math', })
      node.type = 'html'
      delete node.data
    })
  }
}

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
    })
  ],
});
