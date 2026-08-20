// Created by GPT-5.6 Sol Max [codex]. Revised by AndyBRoswell.

import { randomUUID } from 'node:crypto'
import { expect, test } from 'vitest'
import * as bib from '@/bib.ts'
import * as catalog from '@/catalog.ts'
import type { Citation_Item, Material, Scoped_References } from '@/types/data.ts'

test('resolve_citations aggregates results from all citation items', () => {
  const namespace = randomUUID()
  const first_ID = `${namespace}:first`
  const second_ID = `${namespace}:second`
  const third_ID = `${namespace}:third`
  const first: Material = { type: 'book', title: `${namespace}:first` }
  const second: Material = { type: 'book', title: `${namespace}:second` }
  const third: Material = { type: 'book', title: `${namespace}:third` }
  catalog.add([ first_ID ], first)
  catalog.add([ second_ID ], second)
  catalog.add([ third_ID ], third)

  const references: Scoped_References = {
    main: [ first, second ],
    appendix: [ third ],
  }
  const mangled = bib.mangle_references(references)
  const citation_items: Citation_Item[] = [
    first_ID, // Resolve an unscoped ID.
    {
      condition: { scope: [ 'appendix' ], ID: third_ID }, // Resolve an ID within a named scope.
      prefix: 'see ',
      label: 'page',
      locator: '42',
      suffix: ' for details',
    },
    {
      filter: material => material.title === second.title || material.title === third.title, // Resolve multiple bibliography entries at once.
      options: { count: 2 },
    },
  ]

  expect(bib.resolve_citations(mangled, citation_items)).toEqual([
    { numbers: [ 1 ] },
    {
      numbers: [ 3 ],
      prefix: 'see ',
      label: 'page',
      locator: '42',
      suffix: ' for details',
    },
    { numbers: [ 2, 3 ] },
  ])
})
