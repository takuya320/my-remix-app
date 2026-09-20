import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['build/', '.react-router/', 'node_modules/'],
  },

  // Base
  js.configs.recommended,

  // React
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    settings: {
      react: { version: 'detect' },
      formComponents: ['Form'],
      linkComponents: [
        { name: 'Link', linkAttribute: 'to' },
        { name: 'NavLink', linkAttribute: 'to' },
      ],
    },
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...react.configs.flat['jsx-runtime'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },

  // TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    settings: {
      'import/internal-regex': '^~/',
      'import/resolver': {
        node: { extensions: ['.ts', '.tsx'] },
        typescript: { alwaysTryTypes: true },
      },
    },
  },

  // Node-side config files
  {
    files: ['*.config.{js,ts}', 'app/routes.ts', 'app/entry.server.tsx'],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
)
