import Link from 'next/link'
import { styled } from '@fower/styled'
import { Box } from '@fower/react'
import { useUser } from '@stores/user.store'
import { AvatarWithMenu } from './AvatarWithMenu'
import { Logo } from './Logo'
import { LoginButton } from './LoginButton'
import { modalService } from '@generated/modalService'

const LinkItem = styled(Link, ['textBase', 'py1'], {
  color: ' #666',
  textDecoration: 'none',
  // transition: color 0.2s ease 0s;
})

const Sign = styled(Link, {})

export const HomeNav = () => {
  const { user } = useUser()

  return (
    <Box p-4 pt3>
      <Box toBetween toCenterY w-1120 mx-auto>
        <Box toCenterY>
          <Logo></Logo>
          <Box spaceX-12 ml-20>
            <LinkItem href="/">首页</LinkItem>
            <LinkItem href="/">帮助</LinkItem>
            <LinkItem href="/feedback">反馈</LinkItem>
            <LinkItem href="/about">关于</LinkItem>
          </Box>
        </Box>
        {user && <AvatarWithMenu></AvatarWithMenu>}
        {!user && (
          <Box spaceX4 textBase>
            <Box
              as="a"
              href="/register"
              onClick={(e) => {
                e.preventDefault()
                modalService.openModalSign()
              }}
            >
              注册
            </Box>
            <LoginButton>登 录</LoginButton>
          </Box>
        )}
      </Box>
    </Box>
  )
}
