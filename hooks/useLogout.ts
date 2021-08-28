import { request } from '@peajs/request'
import { useToken } from '@stores/token.store'
import { useUser } from '@stores/user.store'
import { useVisit } from '@stores/visit.store'
import { useRouter } from 'next/router'

export function useLogout() {
  const { setUser } = useUser()
  const { setToken } = useToken()
  const { setVisit } = useVisit()
  const { push } = useRouter()

  async function logout() {
    const data = await request('/api/logout', {
      method: 'POST',
    })

    setTimeout(() => {
      setUser(null as any)
      setToken(null as any)
      setVisit(null as any)
    }, 0)
    // location.href = '/'
    push('/')
  }

  return { logout }
}
