module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'import-helpers',
  ],
  rules: {
    'prettier/prettier': 'error',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'arrow-parens': 'off',
    'prettier/prettier': 'error',
    'global-require': 'off',
    'no-unused-vars': 'off', //['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', 'ts'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'import/no-unresolved': ['error', { ignore: ['@expo/vector-icons'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^(react|styled-components)/',
          'module',
          '/^~/atoms/',
          '/^~/molecules/',
          '/^~/organismis/',
          '/^~/templates/',
          '/^~/context/',
          ['parent', 'sibling', 'index'],
          '/^~/(assets|res)/',
          '/^(~/|./)styles/',
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/extensions': ['js', 'jsx', '.ts', '.tsx'],
    'import/resolver': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      alias: {
        map: [['~', './src']],
        extensions: ['.js', '.ts', '.tsx', '.d.ts', '.json'],
      },
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
