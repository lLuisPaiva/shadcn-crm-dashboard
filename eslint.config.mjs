import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-empty-interface": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "@typescript-eslint/no-empty-object-type": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-expressions": 0,
      // Allow unescaped entities in JSX (quotes, apostrophes)
      "react/no-unescaped-entities": "off",
      // Allow <a> tags for internal links (Next.js still recommends <Link> but won't error)
      "@next/next/no-html-link-for-pages": "off",
    },
  },
];

export default eslintConfig;
