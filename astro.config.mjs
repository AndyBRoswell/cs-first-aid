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
        customCss: [
          './src/styles/docs.css',
        ],
        sidebar: [
          'preface/preface',
          {
            label: '课程、教科书与参考资料',
            items: [
              'courses-textbooks-and-references/intro',
              {
                label: '课程',
                autogenerate: { directory: 'courses-textbooks-and-references/courses' }
              }
            ]
          }
        ],
      }
    )
  ]
});