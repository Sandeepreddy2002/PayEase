/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  project: "./apps/web/tsconfig.json",
  tsconfigRootDir: __dirname,
};


// /** @type {import("eslint").Linter.Config} */
// module.exports = {
//   root: true,
//   extends: ["@repo/eslint-config/next.js"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: true,
//   },
// };
