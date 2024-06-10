// eslint.config.js
import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import globals from "globals";

export default [
  js.configs.recommended,
  { ignores: ["public/contrib/*", "bin"] },
  {
    plugins: {
      jest,
    },
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: { node: true, jest: true, ...globals.jest },
    },
    ...jest.configs["flat/recommended"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: { ...globals.node },
    },
    rules: {
      "no-empty": "error",
      "no-multiple-empty-lines": "warn",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
  {
    files: ["public/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: { browser: true, jquery: true, node: false, jest: true },
    },
    rules: { "no-var": "off", "prefer-const": "off" },
  },
];
