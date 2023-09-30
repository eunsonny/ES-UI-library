import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";
// import typescript from "@rollup/plugin-typescript";
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path'

export default {
  input: {
    index: path.join('./src', 'index')
  },
  output: ['cjs', 'esm'].map(getOutputOption),
  external: [/@babel\/runtime/, /.yarn/, '@babel/runtime/helpers/extends'],
  // external: [/@babel\/runtime/, /.yarn/],
  plugins: [
    commonjs(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }), 
    typescript({
      include: ['./src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules',
        'rollup.config.mjs',
        '**/stories',
        '**/*.stories.{ts,tsx}'
      ],
      tsconfigOverride: {
        compilerOptions: {
          noEmit: false,
          emitDeclarationOnly: true,
          mapRoot: process.cwd(),
          declarationDir: path.join('./dist'),
        },
      },
      useTsconfigDeclarationDir: true,
    }),
    babel({
      babelHelpers: "runtime",
      exclude: ['.yarn/**'],
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: ['@babel/plugin-transform-runtime']
    }),
    postcss({
      config: {
        path: './postcss.config.js'
      },
      extensions: ['.css'], 
    }),
    peerDepsExternal(),
  ],
};

/** @type {() => import('rollup').OutputOptions} */
function getOutputOption(format) {
  return {
    dir: './dist',
    sourcemap: true,
    format,
    entryFileNames: `[name].${format}.js`,
    interop: 'auto',
    preserveModules: true,
    preserveModulesRoot: './src',
  };
}
