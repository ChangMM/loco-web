import { Box } from '@fower/react'
import { Form, Field } from '@formy/react'
import { request } from '@peajs/request'
import { Button } from '@bone-ui/button'
import { apiService } from '@generated/api'
import { useUser } from '@stores/user.store'
import { useToken } from '@stores/token.store'
import { toast } from '@bone-ui/toast'
import { useRouter } from 'next/router'
import { useVisit } from '@stores/visit.store'
import { modalService } from '@generated/modalService'
import { useSignStatus } from '@stores/sign-status.store'
import { ThirdPartyLogin } from './ThirdPartyLogin'

interface Values {
  email: string
  password: string
}

export function LoginForm() {
  const { setUser } = useUser()
  const { setToken } = useToken()
  const { setVisit } = useVisit()
  const { push } = useRouter()
  const { setStatus } = useSignStatus()

  return (
    <Box>
      <Box as="h1">登录</Box>
      <Form
        onSubmit={async (values: Values) => {
          try {
            const { user, token, visit } = await request('/api/login', {
              method: 'POST',
              body: values,
            })

            setToken(token)
            setUser(user)
            setVisit(visit)

            push(`/t/${visit.teamId}?tableId=${visit.tableId}&viewId=${visit.viewId}`)
            modalService.closeModalSign()
          } catch (error: any) {
            console.log('error:', error)
            toast.error(error.message)
          }
        }}
      >
        <Field
          name="email"
          value="loco@qq.com"
          component="Input"
          componentProps={{
            placeholder: 'Email',
            size: 'lg',
          }}
          rules={{ required: '请输入邮箱' }}
        />
        <Field
          name="password"
          value="123456"
          component="Input"
          componentProps={{
            placeholder: 'Password',
            type: 'password',
            size: 'lg',
          }}
          rules={{ required: '请输入密码' }}
        />
        <Button w-100p type="submit" size="lg">
          登 录
        </Button>
      </Form>

      <ThirdPartyLogin></ThirdPartyLogin>

      <Box toCenter my4 spaceX2>
        <Box>No account?</Box>
        <Box
          as="a"
          onClick={() => {
            setStatus('register')
          }}
        >
          Create one
        </Box>
      </Box>
    </Box>
  )
}
