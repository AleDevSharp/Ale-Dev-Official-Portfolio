// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = tseslint.config({
  files: ['**/*.{ts,tsx}'], // Aggiunto tsx per React
  ignores: ['dist/**', 'build/**', 'node_modules/**'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    eslintPluginPrettierRecommended,
    {
      plugins: {
        react: reactPlugin,
        'react-hooks': reactHooks,
        'simple-import-sort': simpleImportSort,
      },
      rules: {
        // React specific rules
        'react/react-in-jsx-scope': 'off', // Non necessario con React 17+
        'react/jsx-uses-react': 'off', // Non necessario con React 17+
        'react/jsx-uses-vars': 'error',
        'react/jsx-key': 'error',
        'react/prop-types': 'off', // Usiamo TypeScript per le props

        // React Hooks rules
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // Import sort (adattato per React)
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'],
              ['^@?(?!baf)\\w'],
              ['^@baf?\\w'],
              ['^\\u0000'],
              ['^\\.\\./?', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              ['^.+\\.s?css$'],
            ],
          },
        ],
        'simple-import-sort/exports': 'error',
      },
    },
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'enumMember',
        format: ['PascalCase'],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'], // Permette PascalCase per i componenti React
      },
    ],
    complexity: [
      'error',
      {
        max: 60,
      },
    ],
    'space-in-parens': ['warn', 'never'],
    'block-spacing': 'off',
    'comma-spacing': 'off',
    'comma-dangle': 'off',
    'func-call-spacing': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'lines-around-comment': 'off',
    'lines-between-class-members': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-infix-ops': 'off',
    indent: 'off',
    'arrow-spacing': 'off',
    'no-use-before-define': 'off',
    'no-new-wrappers': 'error',
    'no-throw-literal': 'error',
    'no-shadow': 'off',
    'no-invalid-this': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-invalid-this': ['warn'],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // Abilita il parsing JSX
      },
    },
  },
});
