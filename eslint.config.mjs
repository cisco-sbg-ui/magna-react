import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooksRules from "eslint-plugin-react-hooks";
import pluginCypress from "eslint-plugin-cypress/flat";
import globals from "globals";

export default [
  eslint.configs.recommended,
  pluginCypress.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ignores: ["lib/*", ".next/*"]
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    settings: {
      react: {
        version: "18.2.0"
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
    plugins: {
      "react-hooks": reactHooksRules,
      cypress: pluginCypress,
      "jsx-a11y": jsxA11y
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/prop-types": "off",
      "react-hooks/rules-of-hooks": "warn",
      "cypress/no-unnecessary-waiting": "error",
      "cypress/unsafe-to-chain-command": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports"
        }
      ],
      "no-console": ["error", {allow: ["warn", "error"]}],
      ...jsxA11y.configs.recommended.rules
    }
  }
];
