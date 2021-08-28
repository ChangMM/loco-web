import React from "react"
import { Modals, ModalConfig } from "@common/modal"
import ModalAddProject from "@modals/ModalAddProject"
import ModalAddRowWithData from "@modals/ModalAddRowWithData"
import ModalAddTeam from "@modals/ModalAddTeam"
import ModalAddVersion from "@modals/ModalAddVersion"
import ModalEditLongText from "@modals/ModalEditLongText"
import ModalFormTable from "@modals/ModalFormTable"
import ModalSign from "@modals/ModalSign"
import ModalTest from "@modals/ModalTest"

export const config: ModalConfig = [{
  name: 'ModalAddProject',
  component: ModalAddProject,
}, {
  name: 'ModalAddRowWithData',
  component: ModalAddRowWithData,
}, {
  name: 'ModalAddTeam',
  component: ModalAddTeam,
}, {
  name: 'ModalAddVersion',
  component: ModalAddVersion,
}, {
  name: 'ModalEditLongText',
  component: ModalEditLongText,
}, {
  name: 'ModalFormTable',
  component: ModalFormTable,
}, {
  name: 'ModalSign',
  component: ModalSign,
}, {
  name: 'ModalTest',
  component: ModalTest,
},]

export function ModalContainer() {

  return (
    <Modals config={config}></Modals>
  )

}
