import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

export default {
  input: 'src/index.ts',
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
    typescript()
  ],
};
