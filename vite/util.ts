import _ from 'lodash'

export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = _.cloneDeep(env)
  Object.entries(env).forEach(([key, value]) => {
    // Boolean类型
    if (value === 'true' || value === 'false')
      env[key] = value === 'true'

    // 数值类型
    if (/^\d+$/.test(value))
      env[key] = Number(value)

    if (value === 'null')
      envs[key] = null

    if (value === 'undefined')
      envs[key] = undefined
  })
  return envs
}
