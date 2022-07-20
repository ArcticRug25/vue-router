import * as yup from 'yup'
// a
yup.setLocale({
  mixed: {
    // eslint-disable-next-line no-template-curly-in-string
    required: '${label}必须输入',
  },
  string: {
    email: '邮箱格式错误',
  },
})

export default yup
