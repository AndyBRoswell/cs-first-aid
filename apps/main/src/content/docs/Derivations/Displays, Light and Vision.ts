import * as catalog from '@cs-first-aid/bibkit/catalog'
import * as util from '@cs-first-aid/util'
import '@/data/materials/import materials.ts'

export const references = [
  ...catalog.filter(m => m.type === 'paper-conference' && util.ieq(m.title!, 'Optimal Rendering for Colour Matrix Displays'), { count: 1 }),
  catalog.get('ISO 8596:2017'),
  catalog.get('GB/T 11533-2011'),
  catalog.get('PBRT'),
  ...catalog.filter(m => m["collection-title"]?.includes('CS 184') && m.issued?.["date-parts"]?.[0]?.[0] === 2026 && m.issued?.season === 2),
  ...catalog.filter(m => /光学/.test(m.title!) && /新概念物理教程/.test(m.title!)),
  catalog.get('Rapport BIPM-2019/05'),
  ...catalog.filter(m => /Mise en pratique for the definition of the candela/.test(m.title!)),
  ...catalog.filter(m => util.ieq(m['container-title']!, 'E-ILV'))
]

