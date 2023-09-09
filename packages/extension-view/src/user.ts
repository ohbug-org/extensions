import dayjs from 'dayjs'
import { sendUserView } from './create-event'

const NAME = 'OhbugExtensionViewUV'

const EXPIRES = 30
function getItem(key: string, value: string, defaultValue: any = null) {
  const item = JSON.parse(value)
  if (item) {
    const now = dayjs()
    if (now.isAfter(dayjs(item.expiry))) {
      localStorage.removeItem(key)
      return defaultValue
    }
    return item.value
  }
  return defaultValue
}
export const LocalStorageWithExpires = {
  getItem(key: string) {
    const storedValue = localStorage.getItem(key)
    if (!storedValue) return null

    return getItem(key, storedValue)
  },
  setItem(key: string, value: unknown) {
    const now = dayjs()
    const item = {
      value,
      expiry: now.add(EXPIRES, 'day').toISOString(),
    }
    return localStorage.setItem(key, JSON.stringify(item))
  },
  removeItem(key: string) {
    return localStorage.removeItem(key)
  },
}

/**
 * initial page view 触发时同时触发
 * 先从 storage 内取值
 * 没有值     => 创建 storage 并记一次 uv
 * 有值(当天) => 不动
 * 有值(昨天) => 更新 storage 并记一次 uv
 * 有值(明天) => 不动 (不应出现这个情况)
 */
function createUserView(path: string) {
  const value = LocalStorageWithExpires.getItem(NAME)

  // 没有值 => 创建 storage 并记一次 uv
  if (!value) {
    LocalStorageWithExpires.setItem(NAME, dayjs().toISOString())
    sendUserView(path)
  }
  else {
    const parsedValue = dayjs(value)
    // 有值(昨天) => 更新 storage 并记一次 uv
    if (parsedValue.isBefore(dayjs(), 'day')) {
      LocalStorageWithExpires.setItem(NAME, dayjs().toISOString())
      sendUserView(path)
    }
  }
}

export default createUserView
