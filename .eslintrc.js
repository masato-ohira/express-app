module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint'
  },
  globals: {
    $nuxt: false,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multi-spaces': 0,
    'no-unused-vars': 1,
    'no-unused-vars': 1,
    'max-len': 0,
    // 'quotes': [1, 'single', {"avoidEscape": true}],
    'quotes': [1, 'single', {allowTemplateLiterals: true}],

    // セミコロン省略
    'semi': ['error', 'never', {'beforeStatementContinuationChars': 'never'}],
    'semi-spacing': ['error', {'after': true, 'before': false}],
    'semi-style': ['error', 'first'],
    'no-extra-semi': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error'
  },
}
