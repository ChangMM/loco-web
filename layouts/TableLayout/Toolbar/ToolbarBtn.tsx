import React, { FC } from 'react'
import { Button } from '@bone-ui/button'
import { upFirst } from '@fower/utils'

interface Props {
  icon?: React.ReactElement
  isHighlight: boolean
  hightLightColor: 'red' | 'blue' | 'orange' | 'green'
}

export const ToolbarBtn: FC<Props> = ({
  children,
  icon,
  isHighlight,
  hightLightColor,
  ...rest
}) => {
  const hightLightProps = isHighlight
    ? {
        [`bg${upFirst(hightLightColor)}200`]: true,
        [`bg${upFirst(hightLightColor)}200-D2--hover`]: true,
        [`${hightLightColor}800`]: true,
      }
    : {}

  return (
    <Button
      borderNone
      size="sm"
      textSM
      fontBold
      variant="ghost"
      leftIcon={icon}
      {...rest}
      colorScheme="gray600"
      {...hightLightProps}
    >
      {children}
    </Button>
  )
}
