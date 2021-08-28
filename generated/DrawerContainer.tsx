import React from "react"
import { Drawers, DrawerConfig } from "@common/drawer"
import DrawerTest from "@drawers/DrawerTest"

export const config: DrawerConfig = [{
  name: 'DrawerTest',
  component: DrawerTest,
},]

export function DrawerContainer() {

  return (
    <Drawers config={config}></Drawers>
  )

}
