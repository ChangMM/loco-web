import { Box } from '@fower/react'
import { useSignStatus } from '@stores/sign-status.store'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'

export default function ModalSign() {
  const { status } = useSignStatus()
  return (
    <Box p5 toCenter>
      <Box w-340>
        {status === 'login' && <LoginForm></LoginForm>}
        {status === 'register' && <RegisterForm></RegisterForm>}
      </Box>
    </Box>
  )
}
