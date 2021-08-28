import React, { ComponentType, Fragment } from 'react'
import { DrawerConfig } from './typings'
import { useDawers } from './drawer.hooks'

interface Props {
  config: DrawerConfig
}

export const Drawers: ComponentType<Props> = ({ config }) => {
  const { drawers, setDrawers } = useDawers()

  const close = (name: string) => {
    setDrawers((drawers) => {
      drawers[name].visible = false
    })
  }

  const isVisible = (name: string) => {
    return drawers[name] && drawers[name].visible
  }

  if (!config) return null

  return <Fragment></Fragment>
}
