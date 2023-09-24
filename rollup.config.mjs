import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/components/Button/index.ts',
  output: [
    {
      file: "dist/bundle.esm.js",
      format: 'esm',
      sourcemap: true,
    },
    {
      file: "./dist/bundle.js",
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    commonjs(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }), 
    babel({
      babelHelpers: "runtime",
      exclude: '.yarn/**',
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    typescript({
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
    })
  ],
};
