const path = require('path')
const rollupResolve = require('rollup-plugin-node-resolve')
const rollupCommonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const { terser } = require('rollup-plugin-terser')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const resolve = dir => path.resolve(__dirname, dir)
const inputPath = resolve('./src/index.js')
const outputUmdPath = resolve('./dist/cxvh.datav.min.js')
const outputEsmPath = resolve('./dist/cxvh.datav.esm.min.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd',
      name: 'cxvhDatav',
      globals: {
        vue: "Vue"
      }
    },
    {
      file: outputEsmPath,
      format: 'esm',
      globals: {
        vue: "Vue"
      }
    }
  ],
  plugins: [
    vue(),
    rollupResolve(),
    rollupCommonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    json(),
    postcss({
      plugins: []
    }),
    terser()
  ],
  external: [
    "vue"
  ]
}