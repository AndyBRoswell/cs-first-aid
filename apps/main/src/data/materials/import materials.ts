import pino from 'pino'
import node_path from 'node:path'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import type { Entry } from '@cs-first-aid/bibkit/types/data'
import * as util from '@cs-first-aid/util'

type Material_Module = {
  entries: Entry[]
  resolveRelations?: () => void
}

const logger = pino(util.pino_arg)
const material_modules = Object.entries(
  import.meta.glob<Material_Module>([ './*.ts', '!./import materials.ts' ], { eager: true })
).sort(([ left_path ], [ right_path ]) => left_path < right_path ? -1 : left_path > right_path ? 1 : 0)

logger.info('Registering materials...')
for (const [ module_path, material_module ] of material_modules) {
  if (Array.isArray(material_module.entries) === false) { throw new Error(`Material module ${module_path} does not export an \`entries\` array.`) }
  catalog.add_items(material_module.entries)
}
for (const [ , material_module ] of material_modules) { material_module.resolveRelations?.() }
logger.info('Materials loaded.')

const materials_output_path: string = node_path.join(process.cwd(), 'local/materials.json') // Keep the app-owned dump output under apps/main.
await catalog.dump_locally(materials_output_path)
