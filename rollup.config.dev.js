const path = require('path')
const rollupResolve = require('rollup-plugin-node-resolve')
const rollupCommonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const vue = require('rollup-plugin-vue')
const postcss = require('rollup-plugin-postcss')

const resolve = dir => path.resolve(__dirname, dir)
const inputPath = resolve('./src/index.js')
const outputUmdPath = resolve('./dist/cxvh.datav.js')
const outputEsmPath = resolve('./dist/cxvh.datav.esm.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd',
      name: 'cxvhDatav',
      globals: {
        vue: "vue"
      }
    },
    {
      file: outputEsmPath,
      format: 'esm',
      globals: {
        vue: "vue"
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
    postcss({
      plugins: []
    })
  ],
  external: [
    "vue"
  ]
}