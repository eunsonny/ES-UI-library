import resolve from '@rollup/plugin-node-resolve';
import babel from "@rollup/plugin-babel";

export default {
  input: 'src/index.js',
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
    resolve({ extensions: ['.js', '.jsx'] }), 
    babel({
      babelHelpers: "runtime",
      exclude: '.yarn/**',
      extensions: ['.js', '.jsx']
    }),
  ],
};
