import babel from 'rollup-plugin-babel'

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
  plugins: [
    babel({
      exclude: '.yarn/**', // only transpile our source code
    }),
  ],
};
