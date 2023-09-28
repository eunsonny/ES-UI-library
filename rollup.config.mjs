import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from 'path'

export default {
  input: {
    index: path.join('./src', 'index')
  },
  output: ['cjs', 'esm'].map(getOutputOption),
  // output: [
  //   {
  //     file: "dist/bundle.esm.js",
  //     format: 'esm',
  //     sourcemap: true,
  //   },
  //   {
  //     file: "./dist/bundle.js",
  //     format: 'cjs',
  //     sourcemap: true,
  //   },
  // ],
  external: [/@babel\/runtime/, /.yarn/],
  plugins: [
    commonjs(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }), 
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
    typescript({
      include: ['./src/**/*.{ts,tsx}'],
      exclude: [
        'node_modules',
        '**/stories',
        '**/*.stories.{ts,tsx}'
      ]
    }),
    postcss({
      config: {
        path: './postcss.config.js'
      },
      extensions: ['.css'], 
      extract: true,
    }),
    peerDepsExternal(),
  ],
};

/** @type {() => import('rollup').OutputOptions} */
function getOutputOption(format) {
  return {
    dir: './package',
    sourcemap: true,
    format,
    entryFileNames: `[name].${format}.js`,
    interop: 'auto',
    preserveModules: true,
    preserveModulesRoot: './src',
  };
}
