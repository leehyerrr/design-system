// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   root: true,
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: "./tsconfig.eslint.json",
//     tsconfigRootDir: __dirname,
//   },
//   extends: [
//     "eslint:recommended",
//     "plugin:react/recommended",
//     "plugin:storybook/recommended",
//     "prettier",
//   ],
//   plugins: ["react", "@typescript-eslint", "react-hooks", "jsx-a11y"],
//   rules: {
//     "react-hooks/rules-of-hooks": "error",
//     "react-hooks/exhaustive-deps": "warn",
//     //"react/react-in-jsx-scope": "off",
//     "comma-dangle": "off",
//     "react/display-name": "off",
//     "no-empty-function": "off",
//     "@typescript-eslint/no-empty-function": ["off"],
//     "@typescript-eslint/no-unused-vars": [
//       "error",
//       {
//         argsIgnorePattern: "^_",
//       },
//     ],
//     "storybook/prefer-pascal-case": "off",
//   },
//   overrides: [
//     {
//       files: ["*.ts", "*.tsx"],
//       rules: {
//         "no-undef": "off",
//       },
//     },
//   ],
//   ignorePatterns: ["**/dist/**/*", ".eslintrc.js"],
//   settings: {
//     "import/resolver": {
//       typescript: {},
//     },
//   },
// };

import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      "**/dist/**/*",
      "**/storybook-static/**",
      "**/*.d.ts",
      "**/.storybook/**",
      "**/node_modules/**",
      "eslint.config.js",
      ".eslintrc.js",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        module: "readonly",
        require: "readonly",
        process: "readonly",
        console: "readonly",
        window: "readonly",
        document: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        URL: "readonly",
        location: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
      storybook,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      "react/display-name": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "comma-dangle": "off",
      "no-empty-function": "off",
      "no-undef": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "storybook/prefer-pascal-case": "off",
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  storybook.configs["flat/recommended"],
  prettier,
]);
