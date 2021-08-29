import { toast } from '@bone-ui/toast'
import { request } from '@peajs/request'
import { parse } from 'qs'
import { useToken } from '@stores/token.store'
import { useUser } from '@stores/user.store'
import { Box } from '@fower/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useVisit } from '@stores/visit.store'

export default function Redirect() {
  const router = useRouter()

  const { setUser } = useUser()
  const { setToken } = useToken()
  const { setVisit } = useVisit()
  const { push } = useRouter()

  async function login() {
    const code = parse(location.search.replace(/^\?/, '')).code as string
    try {
      const { user, token, visit } = await request('/api/login-by-github', {
        method: 'POST',
        body: { code },
      })

      setToken(token)
      setUser(user)
      setVisit(visit)

      push(`/t/${visit.teamId}?tableId=${visit.tableId}&viewId=${visit.viewId}`)
    } catch (error) {
      toast.error(error?.message || '登录失败')
      router.push('/')
    }
  }

  useEffect(() => {
    login()
  }, [])

  return (
    <Box>
      <Box>登录中...</Box>
    </Box>
  )
}