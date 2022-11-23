module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/multi-word-component-names': 0,
    // 'prettier/prettier': 0,
    'vue/html-self-closing': 0,
    'space-before-function-paren': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-indent': 0,
    'func-call-spacing': 0,
    'no-multiple-empty-lines': [1, { max: 2, maxEOF: 1 }],
    'vue/no-unused-vars': 1,
    quotes: 1,
    'no-unused-vars': 1,
    semi: 1,
    'no-trailing-spaces': 1,
    'padded-blocks': 1
  }
}
