import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Read package.json without requiring JSON import assertions
const __filename = fileURLToPath(import.meta.url);
const __dirname = __filename.substring(0, __filename.lastIndexOf('/'));
const pkg = JSON.parse(fs.readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  ...Object.keys(pkg.dependencies || {})
];

export default {
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
