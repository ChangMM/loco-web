import React, { FC, useContext } from 'react'
import { forwardRef } from '@bone-ui/utils'
import { FowerHTMLProps } from '@fower/core'
import { CheckCircleSolid } from '@bone-ui/icons/CheckCircleSolid'
import { InformationCircleSolid } from '@bone-ui/icons/InformationCircleSolid'
import { ExclamationCircleSolid } from '@bone-ui/icons/ExclamationCircleSolid'
import { XCircleSolid } from '@bone-ui/icons/XCircleSolid'
import { alertContext } from './alertContext'

export interface AlertIconProps extends FowerHTMLProps<'svg'> {}

const IconComponents: any = {
  default: InformationCircleSolid,
  info: InformationCircleSolid,
  warning: ExclamationCircleSolid,
  success: CheckCircleSolid,
  error: XCircleSolid,
}

export const AlertIcon: FC<AlertIconProps> = forwardRef((props, ref) => {
  const { type = 'default' } = useContext(alertContext)
  const Icon = IconComponents[type]
  return <Icon className="bone-alert-icon" mr2 minW-24 square6 ref={ref} {...(props as any)}></Icon>
})
