import React, { forwardRef, cloneElement } from 'react'
import { FowerColor } from '@fower/core'
import { Box } from '@fower/react'
import { FowerHTMLProps } from '@fower/core'

export interface TagProps extends FowerHTMLProps<'div'> {
  colorScheme?: FowerColor

  variant?: 'outline' | 'solid'

  size?: Size

  icon?: React.ReactElement

  onClose?(): void

  closable?: boolean
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | number

// eslint-disable-next-line react/display-name
export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    variant = 'solid',
    colorScheme = 'primary',
    size = 'xs',
    icon,
    children,
    onClose,
    closable,
    ...rest
  } = props

  const sizeStyle = getSizeStyle(size)

  return (
    <Box
      className="bone-tag"
      ref={ref}
      display="inline-flex"
      toCenter
      textSM
      h-24
      px-6
      rounded-9999
      {...getVariantStyle(colorScheme)[variant]}
      {...sizeStyle}
      {...rest}
    >
      {icon && cloneElement(icon, { square: sizeStyle.f })}
      {icon && <Box w-6></Box>}
      {children}
      {closable ? (
        <Box as="span" ml-3 cursorPointer bgGray400 onClick={onClose}>
          X
        </Box>
      ) : null}
    </Box>
  )
})

function getVariantStyle(color: string): any {
  return {
    solid: {
      // c: 'white',
      bg: color,
    },
    outline: {
      color,
      border: true,
      // borderColor: styli.getColorValue(color),
    },
  }
}

function getSizeStyle(size: Size) {
  const sizes = {
    xs: { h: 24, f: 12, px: 12 },
    sm: { h: 28, f: 14, px: 16 },
    md: { h: 32, f: 16, px: 20 },
    lg: { h: 36, f: 18, px: 24 },
  }
  if (typeof size === 'string') return sizes[size]
  return { h: size, px: size * 0.5, f: size * 0.4 }
}
