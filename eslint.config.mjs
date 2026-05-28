import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export default defineConfig([
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],

    plugins: {
      import: importPlugin,
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      "unused-imports/no-unused-imports": "error",

      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],

      "prefer-const": "error",
      "no-var": "error",

      eqeqeq: ["error", "always"],
    },
  },
]);
