import React, { FC, ReactNode } from 'react'
// import { Portal } from '@bone-ui/portal'
import { forwardRef } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/core'
import { styled } from '@fower/styled'
import { PopoverRenderProps } from './types'
import { Arrow } from 'react-laag'
import { motion, AnimatePresence } from 'framer-motion'
import { usePopoverContext } from './context'

const AnimatedDiv = styled(motion.div)

export interface PopoverContentProps extends FowerHTMLProps<'div'> {
  children: ((props: PopoverRenderProps) => ReactNode) | ReactNode
}

export const PopoverContent: FC<PopoverContentProps> = forwardRef(
  (props: PopoverContentProps, ref) => {
    const { children, ...rest } = props

    const { isOpen, layerProps, arrowProps, renderLayer, getRenderProps } = usePopoverContext()
    return (
      <>
        {renderLayer(
          <AnimatePresence>
            {isOpen && (
              <AnimatedDiv ref={ref} shadow bgWhite rounded zIndex-10000 {...layerProps} {...rest}>
                {typeof children === 'function' ? (children as any)(getRenderProps()) : children}
                <Arrow {...arrowProps} />
              </AnimatedDiv>
            )}
          </AnimatePresence>,
        )}
      </>
    )
  },
)
