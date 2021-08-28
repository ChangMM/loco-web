// import { Box } from '@fower/react'
import { styled } from '@fower/styled'
import Link from 'next/link'
import { IconLogo } from './icons/IconLogo'

const StyledLink = styled(Link)

interface Props {
  href?: string
  colorMode?: 'light' | 'dark'
}

export const Logo = ({ colorMode = 'light', href = '/' }: Props) => {
  return (
    <StyledLink href={href}>
      <IconLogo size={32} rotate-270></IconLogo>
      {/* <Box
        as="span"
        relative
        top1
        text2XL
        white={colorMode === 'dark'}
        gray700={colorMode === 'light'}
        fontBold
        css={{ fontFamily: 'calligraffittiregular' }}
      >
        Loco
      </Box> */}
    </StyledLink>
  )
}
