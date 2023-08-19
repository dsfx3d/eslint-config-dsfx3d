# eslint-config-dsfx3d

[![npm version](https://badge.fury.io/js/eslint-config-dsfx3d.svg)](https://badge.fury.io/js/eslint-config-dsfx3d)

An opinionated ESLint config for TypeScript projects.

## Features

- Extends recommended ESLint configurations including `eslint:recommended`, `plugin:prettier/recommended`, `eslint-config-unjs`, and `plugin:sonarjs/recommended`.
- Includes rules for sorting imports, object curly spacing, and various complexity metrics.
- Configured with `sort-imports-es6-autofix` plugin for auto-fixing import orders.

## Installation

To install the `eslint-config-dsfx3d`, use the following command:

```bash
npm install eslint-config-dsfx3d
```

## Usage

In your `.eslintrc` file, extend this configuration:

```json
{
  "extends": "eslint-config-dsfx3d"
}
```

## Changelog

Refer to the [CHANGELOG.md](https://github.com/dsfx3d/eslint-config-dsfx3d/blob/main/CHANGELOG.md) for detailed release notes.

## Dependencies

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-prettier`
- `eslint-config-unjs`
- `eslint-plugin-prettier`
- `eslint-plugin-sonarjs`
- `eslint-plugin-sort-imports-es6-autofix`

## Author

Yashodhan Singh Rathore <dsfx3d@gmail.com>
