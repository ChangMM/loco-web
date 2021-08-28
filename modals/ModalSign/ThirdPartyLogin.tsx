import { Box } from '@fower/react'
import { Form, Field } from '@formy/react'
import { Button } from '@bone-ui/button'
import { apiService } from '@generated/api'
import { useUser } from '@stores/user.store'
import { useToken } from '@stores/token.store'
import { toast } from '@bone-ui/toast'
import { Divider, DividerTitle } from '@bone-ui/divider'
import { useRouter } from 'next/dist/client/router'
import { useVisit } from '@stores/visit.store'
import { modalService } from '@generated/modalService'
import { IconGoggle } from '@components/icons/IconGoggle'
import { IconGithub } from '@components/icons/IconGithub'
import { useSignStatus } from '@stores/sign-status.store'

interface Values {
  email: string
  password: string
}

export function ThirdPartyLogin() {
  return (
    <Box>
      <Divider my6>
        <DividerTitle>or</DividerTitle>
      </Divider>
      <Box spaceY4>
        <Button
          w-100p
          variant="outline"
          colorScheme="black"
          border-2
          size="lg"
          leftIcon={<IconGithub></IconGithub>}
        >
          使用 Github 登录
        </Button>

        <Button
          w-100p
          border-2
          variant="outline"
          colorScheme="black"
          size="lg"
          leftIcon={<IconGoggle></IconGoggle>}
        >
          使用 Goggle 登录
        </Button>
      </Box>
    </Box>
  )
}
