/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "eslint-config-unjs",
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
  },
};

// eslint-disable-next-line unicorn/prefer-module
module.exports = config;
