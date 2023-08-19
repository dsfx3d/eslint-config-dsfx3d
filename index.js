/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "eslint-config-unjs",
    "plugin:sonarjs/recommended",
  ],
  plugins: ["sort-imports-es6-autofix"],
  rules: {
    "sort-imports-es6-autofix/sort-imports-es6": [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "object-curly-spacing": "off",
    complexity: ["error", 3],
    "max-params": ["error", 4],
    "max-statements": ["error", 7],
    "max-statements-per-line": [
      "error",
      {
        max: 1,
      },
    ],
    "max-nested-callbacks": ["error", 2],
    "max-depth": [
      "error",
      {
        max: 3,
      },
    ],
    "unicorn/filename-case": "off",
    "import/order": "off",
    "require-await": "off",
  },
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
