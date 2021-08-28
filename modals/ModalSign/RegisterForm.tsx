import { Box } from '@fower/react'
import { Form, Field } from '@formy/react'
import { apiService } from '@generated/api'
import { Button } from '@bone-ui/button'
import { useUser } from '@stores/user.store'
import { useToken } from '@stores/token.store'
import { useRouter } from 'next/dist/client/router'
import { useSignStatus } from '@stores/sign-status.store'
import { ThirdPartyLogin } from './ThirdPartyLogin'
import { useVisit } from '@stores/visit.store'
import { modalService } from '@generated/modalService'

interface Values {
  email: string
  password: string
}

export function RegisterForm() {
  const { setUser } = useUser()
  const { setToken } = useToken()
  const { setVisit } = useVisit()
  const { push } = useRouter()
  const { setStatus } = useSignStatus()
  return (
    <Box>
      <Box as="h1">注册</Box>
      <Form
        onSubmit={async (values: Values) => {
          try {
            const { user, token, visit } = await apiService.registerByEmail(values)
            setToken(token)
            setUser(user)
            setVisit(visit)
            push(`/t/${visit.teamId}?tableId=${visit.tableId}&viewId=${visit.viewId}`)
            modalService.closeModalSign()
          } catch (error) {
            // message.error(error.message)
          }
        }}
      >
        <Field
          name="email"
          value=""
          component="Input"
          rules={{ required: '请输入邮箱' }}
          componentProps={{
            placeholder: 'Email',
            size: 'lg',
          }}
        />
        <Field
          name="password"
          value=""
          component="Input"
          rules={{ required: '请输入密码' }}
          componentProps={{
            placeholder: 'Password',
            type: 'password',
            size: 'lg',
          }}
        />

        <Button w-100p type="submit" size="lg">
          注 册
        </Button>
      </Form>

      <ThirdPartyLogin></ThirdPartyLogin>

      <Box toCenter my4 spaceX2>
        <Box>Already have an account?</Box>
        <Box
          as="a"
          onClick={() => {
            setStatus('login')
          }}
        >
          Log in
        </Box>
      </Box>
    </Box>
  )
}
