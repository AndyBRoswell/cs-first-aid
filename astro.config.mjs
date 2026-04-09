import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    starlight(
      {
        title: 'CS First Aid',
        components: {
          PageTitle: './src/components/PageTitle.astro',
        },
        customCss: [
          './src/styles/docs.css',
        ],
        sidebar: [
          'preface/preface',
          {
            label: '课程、教科书与参考资料',
            items: [
              'courses-textbooks-and-references',
              // {
              //   label: '课程',
              //   autogenerate: { directory: 'Courses, Textbooks and References/Courses' }
              // },
              'courses-textbooks-and-references/courses/calculus',
              'courses-textbooks-and-references/courses/mathematical-analysis',
            ]
          }
        ],
      }
    )
  ]
});