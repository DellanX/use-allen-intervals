const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const pkg = require('./package.json');

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {})
];

module.exports = {
  input: 'source/index.ts',
  external,
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true })
  ],
  output: [
    {
      dir: 'dist/esm',
      format: 'es',
      preserveModules: true,
      entryFileNames: '[name].js',
      sourcemap: true
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
      preserveModules: true,
      entryFileNames: '[name].cjs',
      sourcemap: true
    }
  ]
};
