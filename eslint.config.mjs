import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextCoreWebVitals,
  // Formatting is Prettier's job; turn off rules that would conflict with it.
  prettier,
  {
    rules: {
      // Images are small static icons/GIFs and CMS images of unknown size;
      // next/image would not optimise either of them.
      "@next/next/no-img-element": "off",
    },
  },
  globalIgnores([".next/", "node_modules/", ".playwright-mcp/"]),
]);
