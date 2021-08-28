import { useLocalStorage, getLocalStorage } from '@common/stook-localstorage'

const key = 'Token'

export function useToken() {
  const [token, setToken] = useLocalStorage<string>(key)
  return { token, setToken }
}

export function getToken(): string {
  return getLocalStorage(key)
}
