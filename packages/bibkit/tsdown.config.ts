import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    bib: "src/bib.ts",
    catalog: "src/catalog.ts",
    CSL: "src/CSL.ts",
    "types/data": "src/types/data.ts",
  },

  // format: ["esm", "cjs"], // current: esm only
  platform: "node",

  loader: {
    '.csl': 'text',
  },

  fixedExtension: true,

  // dts: {
  //   cjsReexport: true,
  // },
  dts: true,

  clean: true,
  sourcemap: true,
  nodeProtocol: true,
});