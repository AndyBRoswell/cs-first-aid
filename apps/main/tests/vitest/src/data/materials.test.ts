import { expect, test } from 'vitest'
import * as catalog from '@cs-first-aid/bibkit/catalog'
import type { Entry } from '@cs-first-aid/bibkit/types/data'
import '@/data/materials/import materials.ts'

type Material_Module = { entries: Entry[], resolveRelations?: () => void }
const material_modules = Object.entries(import.meta.glob<Material_Module>([ '/src/data/materials/*.ts', '!/src/data/materials/import materials.ts' ], { eager: true }))

test('material relations resolve after every material module is registered', () => {
  const materials = catalog.all()
  const modules_with_relations = material_modules.filter(([ , material_module ]) => material_module.resolveRelations)
  expect(modules_with_relations.length).toBeGreaterThan(0)
  for (const [ module_path, material_module ] of modules_with_relations) {
    const relation_owners = material_module.entries.filter(({ material }) => material.custom?.companion?.length)
    expect(relation_owners.length, `${module_path} did not resolve any companion relationships`).toBeGreaterThan(0)
    for (const { material } of relation_owners) {
      for (const companion of material.custom!.companion!) { expect(materials, `${module_path} resolved a companion outside the catalog`).toContain(companion) }
    }
  }
})
