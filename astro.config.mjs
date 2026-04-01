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
        sidebar: [
          { slug: 'preface/preface' },
        ],
      }
    )
  ]
});