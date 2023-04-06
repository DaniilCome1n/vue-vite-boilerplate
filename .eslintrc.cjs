module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  plugins: [
    'vue',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'no-prototype-builtins': 0,
    'no-param-reassign': ['error', { props: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'prefer-destructuring': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'max-len': ['error', { code: 160 }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/script-indent': ['error', 2, {
          baseIndent: 1,
          switchCase: 0,
          ignores: [],
        }],
        'vue/multi-word-component-names': ['error', {
          ignores: ['index'],
        }],
      },
      extends: [
        'plugin:vue/vue3-recommended',
      ],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript/base',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['error'],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        paths: './tsconfig.json',
      },
    },
  },
};
