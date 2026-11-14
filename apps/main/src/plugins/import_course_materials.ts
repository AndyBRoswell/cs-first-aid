import fast_glob from 'fast-glob'

/**
 * @deprecated
 * This plugin is no longer used. See `@/data/courses/import course materials.ts`.
 * Previously `import.meta.glob` didn't work due to unknown reasons so this Vite plugin was used as a workaround.
 */
export function import_course_materials() {
  const virtualId = 'virtual:import-course-materials'
  const resolvedId = '\0' + virtualId
  return {
    name: 'vite-plugin-import-course-materials',
    resolveId(id: string) {
      if (id === virtualId) { return resolvedId }
      return
    },
    load(id: string) {
      if (id === resolvedId) {
        const course_materials = fast_glob.sync('./src/data/materials/*.ts')
        return course_materials.map(path => `import ${JSON.stringify(path)}`).join('\n')
      }
      return
    }
  }
}
