import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    bib: "src/bib.ts",
    catalog: "src/catalog.ts",
    CSL: "src/CSL.ts",
    "types/data": "src/types/data.ts",
  },

  format: ["esm", "cjs"],
  platform: "node",

  loader: {
    '.csl': 'text',
  },

  fixedExtension: true,

  dts: {
    cjsReexport: true,
  },

  clean: true,
  sourcemap: true,
  nodeProtocol: true,
});