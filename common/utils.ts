export const isServer = typeof window === 'undefined'

// 字符串转数组
export const convertStringToArr = (str = '', pattern = ',') => {
  return (str || '').split(pattern).filter(Boolean)
}

export function getClickEvent(t = 150) {
  let timer: NodeJS.Timer = null as any

  return {
    onSingleClick(cb: any) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(cb, t)
    },
    onDoubleClick(cb: any) {
      if (timer) clearTimeout(timer)
      cb()
    },
  }
}

/**
 * 把数组转换成 hashMap，介绍数据读取遍历次数
 * @example
 * const old = [{id: 1, someKey: "foo"}, {id: 2, someKey: "bar"}]
 * to
 * const new = {1: {id: 1, someKey: "foo"}, 2:{id: 2, someKey: "bar"}  }
 * @param items
 */
export function mappedBykey<T>(items: T[] = [], key = 'id') {
  return items.reduce<Record<string, T>>((result, i: any) => {
    return { ...result, [i[key]]: i }
  }, {})
}

/**
 * 获取前景色
 */
export function calculateForeColor(color = '') {
  const weightString = color.substr(-2, 2)
  const colorWeight = Number(weightString)
  const colorType = color.replace(weightString, '')
  const base = colorType === 'yellow' ? 40 : 30
  return colorWeight > base ? 'white' : 'gray80'
}
