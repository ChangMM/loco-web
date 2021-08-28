import React, { FC } from 'react'
import Link from 'next/link'
import { styled } from '@fower/styled'
import { Box } from '@fower/react'

const LinkItem = styled(Link, ['text-14', 'py-8', 'block'], {
  color: ' #666',
  textDecoration: 'none',
  // transition: color 0.2s ease 0s;
})

const AccountLayout: FC<{}> = ({ children }) => {
  return (
    <Box toCenterX h-100vh bg="#fafafa" style={{ overflow: 'auto' }}>
      <Box row w-1056 spaceX4 mt-20>
        <Box flex-3>
          <Box as="ul" bgWhite border="1px solid #e8e8e8" style={{ listStyle: 'none' }}>
            <Box as="li" leading-48>
              <LinkItem href="/account/profile">
                <Box pl-24>个人信息</Box>
              </LinkItem>
            </Box>
            <Box as="li" leading-48px>
              <LinkItem href="/account/password">
                <Box pl-24>修改密码</Box>
              </LinkItem>
            </Box>
            <Box as="li" leading-48px>
              <LinkItem href="/account/notifications">
                <Box pl-24>通知设置</Box>
              </LinkItem>
            </Box>
            <Box as="li" leading-48px>
              <LinkItem href="/account/safety">
                <Box pl-24>账户安全</Box>
              </LinkItem>
            </Box>
            <Box as="li" leading-48px>
              <LinkItem href="/account/token">
                <Box pl-24>Token</Box>
              </LinkItem>
            </Box>
          </Box>
        </Box>
        <Box bgWhite flex-7 border="1px solid #f0f0f0">
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default AccountLayout
