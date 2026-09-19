export const self_label: unique symbol = Symbol('self_label') // A node's own label; string keys name its children.

export type Custom_Label = Readonly<{
  lecturer: string
  suggested_playback_speed: string
  URL: string
  free_material: Readonly<{
    [self_label]: string
    [name: string]: string
  }>
}>

const custom_label: Readonly<Record<string, Custom_Label>> = {
  'zh-CN': {
    lecturer: '主讲：',
    suggested_playback_speed: '建议倍速：',
    URL: '其它链接：',
    free_material: {
      [self_label]: '免费资源：',
      preview: '预览',
      sample_chapter: '样章',
    },
  },
  en: {
    lecturer: 'Lecturer: ',
    suggested_playback_speed: 'Suggested playback speed: ',
    URL: 'Additional links:',
    free_material: {
      [self_label]: 'Free materials:',
      preview: 'Preview',
      sample_chapter: 'Sample chapter',
    },
  },
}
export const supported_languages: readonly string[] = Object.freeze(Object.keys(custom_label))

export function get_custom_label(language: string): Custom_Label {
  let locale: Intl.Locale
  try { locale = new Intl.Locale(language) }
  catch (cause) { throw new RangeError(`Invalid bibliography language: ${JSON.stringify(language)}`, { cause }) }
  const labels = custom_label[locale.baseName] ?? custom_label[locale.language]
  if (labels === undefined) { throw new RangeError(`Unsupported bibliography language: ${JSON.stringify(language)}`) }
  return labels
}
