import { test, expect } from '@playwright/test';

// @ts-ignore [citation-js doesn't have ts support]
import citation_js from "@citation-js/core";
import '@citation-js/plugin-csl'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const CSL_config = citation_js.plugins.config.get('@csl')
const default_bib_style_name = 'IEEE Custom'
const default_bib_style_file = resolve(import.meta.dirname, '../../src/content/docs/ieee.csl')
const default_bib_style = readFileSync(default_bib_style_file, 'utf8')
CSL_config.templates.add(default_bib_style_name, default_bib_style)
const prettified_default_bib_style: object = {
  format: 'text',
  template: default_bib_style_name,
  hyperlinks: true,
}

// https://citation.js.org/api/0.7/module-@citation-js_plugin-csl.output.html
const cite = new citation_js.Cite([
  { id: 'a', title: 'Item A', issued: { 'date-parts': [ [ 2016 ] ] } },
  { id: 'b', title: 'Item B', issued: { 'date-parts': [ [ 2017 ] ] } },
  { id: 'c', title: 'Item C', issued: { 'date-parts': [ [ 2018 ] ] } }
])

test('@citation-js/plugin-csl.output.citation', { tag: [ '@citation-js/plugin-csl.output.citation', ], }, () => {
  expect(cite.format('citation')).toEqual('(Item A, 2016; Item B, 2017; Item C, 2018)')
  expect(cite.format('citation', { entry: [ 'a', 'b' ] })).toEqual('(Item A, 2016; Item B, 2017)')
  expect(cite.format('citation', { entry: 'a' })).toEqual('(Item A, 2016)')
  expect(cite.format('citation', { entry: [ { id: 'a', label: 'page', locator: 123 } ] })).toEqual('(Item A, 2016, p. 123)')
  expect(cite.format('citation', {
    entry: [ { id: 'c', label: 'page', locator: 1234, } ],
    ...prettified_default_bib_style
  })).toEqual('[1, p. 1234]')
})