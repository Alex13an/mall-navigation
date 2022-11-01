module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  ignorePatterns: ['src/metro'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-constant-condition': 'off',
  },
};
