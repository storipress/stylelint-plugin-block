module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    testRule: false,
  },
  extends: ['standard', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {},
}
