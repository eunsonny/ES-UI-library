export default {
  input: "./src/index.js", // 진입 경로
  output: {
    file: "./dist/bundle.js", // 출력 경로
    format: "es", // 출력 형식
    sourcemap: true,
  },
};