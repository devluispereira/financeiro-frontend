module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
   
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-case-declarations': 'off',
    'import/order': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    "camelcase": 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'prettier/prettier': 'error',
   
  },
};
