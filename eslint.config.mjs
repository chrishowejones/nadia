// eslint.config.js
import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  { ignores: ["public/contrib/*"] },
  {
    plugins: {
      jest,
    },
    ...jest.configs["flat/recommended"],
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: { node: true, jest: true },
    },
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: { node: true, jest: true },
    },
    rules: {
      "no-empty": "error",
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error",
      ...jest.configs["flat/recommended"].rules,
    },
  },
  {
    files: ["public/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: { browser: true, jquery: true, node: false, jest: true },
    },
    rules: { "no-var": "off", "prefer-const": "off" },
    plugins: {
      jest,
    },
  },
];
