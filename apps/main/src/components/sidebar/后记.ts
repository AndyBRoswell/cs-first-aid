import type { SidebarItem } from "@/types/starlight.ts";
import * as release_stages from '../release_stages.ts'


export const Epilog = {
  label: '后记',
  translations: {
    en: 'Epilog',
  },
  slug: '',
  attrs: {
    'data-release-stage': release_stages.to_HTML_attr({ 'zh-CN': 'blank', en: 'blank', })
  },
} satisfies SidebarItem
