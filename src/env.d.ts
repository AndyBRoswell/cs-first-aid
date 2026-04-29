/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

/**
 * Manual Type Shims for Starlight Virtual Modules
 * These allow your custom components to recognize 'virtual:starlight/*' imports.
 */
declare module 'virtual:starlight/components/ThemeSelect' {
  const ThemeSelect: typeof import('@astrojs/starlight/components/ThemeSelect.astro').default;
  export default ThemeSelect;
}

declare module 'virtual:starlight/components/Search' {
  const Search: typeof import('@astrojs/starlight/components/Search.astro').default;
  export default Search;
}

declare module 'virtual:starlight/components/LanguageSelect' {
  const LanguageSelect: typeof import('@astrojs/starlight/components/LanguageSelect.astro').default;
  export default LanguageSelect;
}

declare module 'virtual:starlight/components/SiteTitle' {
  const SiteTitle: typeof import('@astrojs/starlight/components/SiteTitle.astro').default;
  export default SiteTitle;
}

declare module 'virtual:starlight/components/SocialIcons' {
  const SocialIcons: typeof import('@astrojs/starlight/components/SocialIcons.astro').default;
  export default SocialIcons;
}