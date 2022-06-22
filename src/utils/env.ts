import _ from 'lodash'

const env: any = _.cloneDeep(import.meta.env)

Object.entries(env as Record<string, any>).forEach(([key, value]) => {
  // Boolean类型
  if (value === 'true' || value === 'false')
    env[key] = value === 'true'

  // 数值类型
  else if (/^\d+$/.test(value))
    env[key] = Number(value)

  else if (value === 'null')
    env[key] = null

  else if (value === 'undefined')
    env[key] = undefined
})

export default env as ViteEnv
