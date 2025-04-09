import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import stylistic from '@stylistic/eslint-plugin';
import sonarjs from "eslint-plugin-sonarjs";
import simpleImportSort from "eslint-plugin-simple-import-sort";
export default tseslint.config(
  importPlugin.flatConfigs.recommended,
  sonarjs.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  { ignores: ['dist', 'eslint.config.js'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.strict, ...tseslint.configs.stylistic],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,
      '@stylistic': stylistic,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...stylistic.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      '@stylistic/member-delimiter-style': [
        'error',
        {'multiline': {
          'delimiter': 'semi',
          'requireLast': true,
        }}
      ],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/semi-style': ['error', "last"],
      '@stylistic/jsx-self-closing-comp': ['error', {
        "component": true,
        "html": true
      }],
      '@stylistic/jsx-pascal-case': ['error'],
      'react/button-has-type': ['error'],
      '@stylistic/max-len': ['error', { 'code': 130, 'tabWidth': 2 }],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/newline-after-import": ["error"],
      "@typescript-eslint/no-non-null-assertion": "off",
      "import/no-unresolved": "off",
      "@stylistic/arrow-parens": "off",
    },
  },
)
