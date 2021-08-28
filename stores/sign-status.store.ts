import { mutate, getState, useStore } from 'stook'

const key = 'Sign'

type SignStatus = 'login' | 'register' | 'reset-password'

export function useSignStatus() {
  const [status, setStatus] = useStore<SignStatus>(key, 'login')

  return { status, setStatus }
}
