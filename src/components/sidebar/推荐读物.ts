import type { SidebarItem } from "@/types/starlight.ts";
import * as badges from '../badges.ts'

export const Recommended_Reading_Materials = {
  label: '推荐读物',
  translations: {
    en: 'Recommended Reading Materials',
  },
  slug: '',
  attrs: {
    'data-badges': badges.to_HTML_attr([
      {
        text: 'blank',
        class: [ 'release', ],
      },
    ])
  },
} satisfies SidebarItem