import React, { FC, ReactNode, isValidElement } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { CheckOutline } from '@bone-ui/icons/CheckOutline'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { useMenuContext } from './context'

export interface MenuItemProps extends FowerHTMLProps<'div'> {
  selected?: boolean

  disabled?: boolean

  icon?: ReactNode
}

function renderIcon(Icon: any) {
  if (!Icon) return null
  if (isValidElement(Icon)) return Icon

  const isBoneIcon = Icon?.isBoneIcon
  if (isBoneIcon) return <Icon square-20 />
  return <Icon />
}

export const MenuItem: FC<MenuItemProps> = forwardRef((props: MenuItemProps, ref) => {
  const { selected, disabled, icon, children, ...rest } = props
  let { colorScheme, showCheckIcon, checkIcon } = useMenuContext()
  if (selected) rest.color = colorScheme

  checkIcon = checkIcon ? checkIcon : <CheckOutline size={18} />

  return (
    <Box
      className="bone-menu-item"
      ref={ref}
      px4
      py4
      minH9
      toCenterY
      toBetween
      gray800={!selected}
      cursorNotAllowed={!!disabled}
      opacity-40={!!disabled}
      cursorPointer={!disabled}
      bgGray100--hover={!disabled}
      transitionCommon
      duration-400
      {...rest}
    >
      <Box flex-1 toCenterY spaceX2>
        {renderIcon(icon)}
        {typeof children === 'string' ? <Box>{children}</Box> : children}
      </Box>
      {showCheckIcon && selected && checkIcon}
    </Box>
  )
})
