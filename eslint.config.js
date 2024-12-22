const {styleGuide, reactStyleGuide} = require("./lib/flat");

module.exports = [
  ...styleGuide,
  ...reactStyleGuide,
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
