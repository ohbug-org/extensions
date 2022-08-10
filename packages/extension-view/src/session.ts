const DEFAULT_TIMEOUT = 30 * 60 * 1000

class Session {
  session: number | null = null

  timeout: number = DEFAULT_TIMEOUT

  constructor(timeout: number = DEFAULT_TIMEOUT) {
    this.session = new Date().getTime()
    this.timeout = timeout
  }

  /**
   * 检查当前 session 是否过期
   *
   * @returns {boolean}
   */
  isExpired() {
    if (!this.session) {
      throw new Error('Session 没有初始化')
    }
    const now = new Date().getTime()
    return this.session + this.timeout < now
  }

  update() {
    if (!this.session) {
      throw new Error('Session 没有初始化')
    }
    const now = new Date().getTime()
    this.session = now
    return this.session
  }
}

export default Session
