import type { StarlightUserConfig } from '@astrojs/starlight/types';

export type SidebarUserConfig = NonNullable<StarlightUserConfig['sidebar']>;
export type SidebarItem = SidebarUserConfig[number];