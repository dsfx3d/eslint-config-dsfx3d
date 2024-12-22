const tseslint = require("typescript-eslint");
const reactEslint = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh");

module.exports = tseslint.config({
  files: ["**/*.{ts,tsx}"],
  name: "react-style-guide",
  plugins: {
    // "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
    ...reactHooks.configs.recommended.rules,
    // react
    // override recomended
    "react/no-unsafe": "error",
    "react/prop-types": "off", // turn off prop types validation, better use ts ;)

    // not in recomended
    "react/button-has-type": "error",
    "react/jsx-no-script-url": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-fragments": "error",
    "react/jsx-curly-spacing": ["error", {when: "never", allowMultiline: true}],
    "react/jsx-curly-brace-presence": [
      "error",
      {props: "never", children: "ignore"},
    ],
    "react/no-access-state-in-setstate": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unused-state": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-will-update-set-state": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-unused-prop-types": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": [
      "error",
      {
        order: [
          "type-annotations",
          "instance-variables",
          "static-methods",
          "lifecycle",
          "everything-else",
          "rendering",
        ],
        groups: {rendering: ["/^render.+$/", "render"]},
      },
    ],
    "react/sort-default-props": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error",
    "react/hook-use-state": "error",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-namespace": "error",

    // turn all remaining rules to "error" eventually
    "react/jsx-no-useless-fragment": ["warn", {allowExpressions: true}],
    "react/no-danger": "warn",
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "function-declaration",
        unnamedComponents: "function-expression",
      },
    ],

    // could be activated at some point, but too many issues currently
    "react/jsx-handler-names": "off",
    "react/jsx-no-leaked-render": "off", // too many false positives right now

    // react hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
});
