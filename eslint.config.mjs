// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  { ignores: ["public/contrib/*"] },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "commonjs",
      globals: { node: true },
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
      globals: { browser: true, jquery: true, node: false },
    },
    rules: { "no-var": "off", "prefer-const": "off" },
  },
  {},
];
