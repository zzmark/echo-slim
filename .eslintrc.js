module.exports = {
  root: true,
  env: {
    node: true,
  },
  // 引入 tencent AlloyTeam/eslint-config-alloy
  extends: ['alloy'],
  rules: {
    'max-nested-callbacks': ['error', { max: 5 }],

    // 禁止使用 Object.assign
    'prefer-object-spread': 'off',
    // 禁止修改入参
    'no-param-reassign': 'warn',

    radix: 'warn',

    // 限制函数参数在6个以内
    'max-params': ['error', 6],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-operators': 'off',

    'space-before-function-paren': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // 分号配置。不使用行尾分号，若下一行有 [(/+- 开头，则在行开始增加分号
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    // 不允许使用 delete 删除某个变量。删除属性可以
    'no-delete-var': 'error',
    // 要求使用 const
    'prefer-const': [
      'error',
      {
        ignoreReadBeforeAssign: false,
      },
    ],
    'template-curly-spacing': 'off',
    // 缩进控制，交给 editorconfig
    indent: 'off',
    // 尾部逗号，仅 多行数组、多行对象，要求逗号，其余无所谓
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'ignore',
      },
    ],
  },
  globals: {},
  parserOptions: {
    ecmaVersion: 2020,
    parser: 'babel-eslint',
  },
}
