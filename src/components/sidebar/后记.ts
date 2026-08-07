import type { SidebarItem } from "@/types/starlight.ts";
import * as badges from '../badges.ts'


export const Epilog = {
  label: '后记',
  translations: {
    en: 'Epilog',
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
