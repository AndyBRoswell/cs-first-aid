import pino from 'pino'
import * as node_fs_promises from 'node:fs/promises'
import node_path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import type { Entry } from '@cs-first-aid/bibkit/types/data'
import * as util from '@cs-first-aid/util'

type Material_Module = {
  entries: Entry[]
  resolveRelations?: () => void
}

const logger = pino(util.pino_arg)

async function import_material_modules_with_node(): Promise<Record<string, Material_Module>> {
  const directory_path = node_path.dirname(fileURLToPath(import.meta.url))
  const file_names = (await node_fs_promises.readdir(directory_path)).filter(file_name => file_name.endsWith('.ts') && file_name !== 'import materials.ts')
  return Object.fromEntries(await Promise.all(file_names.map(async file_name => [ `./${file_name}`, await import(/* @vite-ignore */ pathToFileURL(node_path.join(directory_path, file_name)).href) as Material_Module ])))
}

const material_modules = Object.entries(
  import.meta.env === undefined // Vite defines `import.meta.env`, while native Node does not; `import.meta.glob` cannot be feature-detected because Vite transforms its calls at build time instead of providing a runtime function.
    ? await import_material_modules_with_node()
    : import.meta.glob<Material_Module>([ './*.ts', '!./import materials.ts' ], { eager: true })
).sort(([ left_path ], [ right_path ]) => left_path < right_path ? -1 : left_path > right_path ? 1 : 0)

logger.debug('Registering materials...')
for (const [ module_path, material_module ] of material_modules) {
  if (Array.isArray(material_module.entries) === false) { throw new Error(`Material module ${module_path} does not export an \`entries\` array.`) }
  catalog.add_items(material_module.entries)
}
for (const [ , material_module ] of material_modules) { material_module.resolveRelations?.() }
logger.debug('Materials loaded.')

const materials_output_path: string = node_path.join(process.cwd(), 'local/materials.json') // Keep the app-owned dump output under apps/main.
await catalog.dump_locally(materials_output_path)
