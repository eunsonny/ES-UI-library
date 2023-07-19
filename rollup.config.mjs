import babel from 'rollup-plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'

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
    nodeResolve({ extensions: ['.js', '.jsx'] }),
    babel({
      exclude: '.yarn/**', // only transpile our source code
      runtimeHelpers: true
    }),
  ],
};
