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
    quotes: 'warn', // 修改为警告
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    // 添加组件命名忽略规则
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'main', 'Navbar', '404', '401'] // 需要忽略的组件名
      }
    ]
  }
}
