import { Box } from '@fower/react'
import { Button } from '@bone-ui/button'
import { Divider, DividerTitle } from '@bone-ui/divider'
import { IconGoggle } from '@components/icons/IconGoggle'
import { IconGithub } from '@components/icons/IconGithub'

export function ThirdPartyLogin() {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID

  const HOST =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://1.14.165.196:3000'
  const redirectUri = `${HOST}/api/auth/callback/github`

  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`

  return (
    <Box>
      <Divider my6>
        <DividerTitle>or</DividerTitle>
      </Divider>
      <Box spaceY4>
        <Button
          as="a"
          href={url}
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
