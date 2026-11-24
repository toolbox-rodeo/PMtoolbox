import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextCoreWebVitals,
  // Formatting is Prettier's job; turn off rules that would conflict with it.
  prettier,
  globalIgnores([".next/", "node_modules/", ".playwright-mcp/"]),
]);
