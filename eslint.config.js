import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  "env", {
        "browser": true,
        "es2021": true
    },
    "extends", [
        "plugin:react/recommended",
        "standard",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides", [],
    "parserOptions", {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins", [
        "react",
        "react-hooks",
        "eslint-plugin-import-helpers"
    ],
    "rules", {
        "prettier/prettier": [
            "error",
            {
                "printWidth": 80,
                "tabWidth": 2,
                "singleQuote": true, // aspas simples
                "trailingComma": "none", // virgula no fim da linha
                "arrowParens": "always",
                "semi": false, // ponto e virgula no fim da linha
                "endOfLine": "auto"
            }
        ],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "import-helpers/order-imports": [
            "warn",
            {
                "newlinesBetween": "always", // new line between groups
                "groups": [
                    "/^react/",
                    "module",
                    "/^@shared/",
                    [
                        "parent",
                        "sibling",
                        "index"
                    ]
                ],
                "alphabetize": {
                    "order": "asc",
                    "ignoreCase": true
                }
            }
        ]
    }
];