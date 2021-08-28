import { useStore } from 'stook'

const key = 'Version'

/**
 * 是否正在管理版本
 * @returns
 */
export function useReadonly() {
  const [readonly, setReadonly] = useStore<boolean>(key, false)
  return { readonly, setReadonly }
}
