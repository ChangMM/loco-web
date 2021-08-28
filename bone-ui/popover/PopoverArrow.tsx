import React, { FC, memo } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/core'
import { Box } from '@fower/react'

export interface PopoverArrowProps extends FowerHTMLProps<'div'> {}

export const PopoverArrow: FC<PopoverArrowProps> = memo(
  forwardRef((props, ref) => {
    props
    ref
    return <Box>arrow</Box>
  }),
)
