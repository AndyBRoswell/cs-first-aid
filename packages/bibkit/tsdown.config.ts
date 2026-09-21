import { defineConfig, type UserConfig } from "tsdown";

export default defineConfig({
  entry: {
    bib: "src/bib.ts",
    catalog: "src/catalog.ts",
    CSL: "src/CSL.ts",
    i18n: "src/i18n.ts",
    "types/data": "src/types/data.ts",
    "tools/Vite plugin": "tools/Vite plugin.ts",
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

  inputOptions: {
    experimental: {
      incrementalBuild: true,
    }
  },

  deps: {
    neverBundle: [ 'vite' ],
  },

  exports: {
    devExports: 'development', // automatically generate exports and publishConfig in package.json
    customExports(exports, { isPublish }) {
      exports['./tools/Vite plugin'] = isPublish ? './dist/tools/Vite plugin.mjs' : './tools/Vite plugin.ts'
      return exports
    },
  },
}) satisfies UserConfig as UserConfig;
