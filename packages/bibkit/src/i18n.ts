export type Extra_Bib_Label = Readonly<{
  lecturer: string
  suggested_playback_speed: string
  URL: string
  free_material: string
  free_material_groups: Readonly<Record<string, string>>
}>

const extra_bib_label: Readonly<Record<string, Extra_Bib_Label>> = {
  'zh-CN': {
    lecturer: '主讲：',
    suggested_playback_speed: '建议倍速：',
    URL: '其它链接：',
    free_material: '免费资源：',
    free_material_groups: {
      preview: '预览',
      sample_chapter: '样章',
    },
  },
  en: {
    lecturer: 'Lecturer: ',
    suggested_playback_speed: 'Suggested playback speed: ',
    URL: 'Additional links:',
    free_material: 'Free materials:',
    free_material_groups: {
      preview: 'Preview',
      sample_chapter: 'Sample chapter',
    },
  },
}
export const supported_languages: readonly string[] = Object.freeze(Object.keys(extra_bib_label))

export function get_extra_bib_label(language: string): Extra_Bib_Label {
  let locale: Intl.Locale
  try { locale = new Intl.Locale(language) }
  catch (cause) { throw new RangeError(`Invalid bibliography language: ${JSON.stringify(language)}`, { cause }) }
  const labels = extra_bib_label[locale.baseName] ?? extra_bib_label[locale.language]
  if (labels === undefined) { throw new RangeError(`Unsupported bibliography language: ${JSON.stringify(language)}`) }
  return labels
}
