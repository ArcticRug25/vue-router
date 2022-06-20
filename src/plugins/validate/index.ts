import veeValidate from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
import yup from './yup'

Object.keys(rules).forEach((key) => {
  veeValidate.defineRule(key, rules[key])
})

veeValidate.configure({
  generateMessage: localize('zh_CN', zh_CN),
})

export default { yup, ...veeValidate }
