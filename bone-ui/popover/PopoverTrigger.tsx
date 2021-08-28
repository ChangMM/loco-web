import React, { FC, ReactNode } from 'react'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'
import { usePopoverContext } from './context'
import { PopoverRenderProps } from './types'

export interface PopoverTriggerProps extends FowerHTMLProps<'div'> {
  children: ((props: PopoverRenderProps) => ReactNode) | ReactNode
}

export const PopoverTrigger: FC<PopoverTriggerProps> = (props) => {
  const { children, ...rest } = props
  const { setOpen, isOpen, triggerProps, getRenderProps } = usePopoverContext()

  return (
    <Box
      className="bone-popover-trigger"
      onClick={() => {
        setOpen(!isOpen)
      }}
      inlineFlex
      {...rest}
      {...triggerProps}
    >
      {typeof children === 'function' ? (children as any)(getRenderProps()) : children}
    </Box>
  )
}
