module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'warn', // 修改为警告
    'space-before-function-paren': 'off',
    // 添加组件命名忽略规则
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'main'] //需要忽略的组件名
      }
    ]
  }
}
