import _ from 'lodash'

export default new class {
  public env = {} as ImportMetaEnv
  constructor() {
    this.env = this.getEnv()
  }

  private getEnv() {
    const envs: any = _.cloneDeep(import.meta.env)
    Object.entries(envs as Record<string, any>).forEach(([key, value]) => {
      // Boolean类型
      if (value === 'true' || value === 'false')
        envs[key] = value === 'true'

      // 数值类型
      else if (/^\d+$/.test(value))
        envs[key] = Number(value)

      else if (value === 'null')
        envs[key] = null

      else if (value === 'undefined')
        envs[key] = undefined
    })
    return envs
  }
}()

