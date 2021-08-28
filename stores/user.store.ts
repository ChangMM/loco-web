import { User } from '@generated/types'
import { useLocalStorage, getLocalStorage } from '@common/stook-localstorage'

const key = 'User'

export function useUser() {
  const [user, setUser] = useLocalStorage<User>('User')

  return { user, setUser }
}

export function getUser(): User {
  return getLocalStorage(key)
}
