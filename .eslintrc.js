module.exports = {
  ignorePatterns: ['!.eslintrc.js', '**/.next/**/*', '**/next-env.d.ts'],
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['no-null', 'simple-import-sort'],
  rules: {
    'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': ['error', { max: 40, skipBlankLines: true, skipComments: true }],
    'no-null/no-null': 'error',
    'import/order': 'off',
    'import/no-duplicates': 'error',
    'sort-imports': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // side effect imports
          ['^\\u0000'],
          // external dependency imports
          ['^'],
          // internal dependency or current package imports
          ['^mvp-'],
          // relative imports (should manually fix them all to current package imports)
          ['^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
  },
}
