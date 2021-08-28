export interface ModalConfigItem {
  name: string
  component: any
}

export type ModalConfig = ModalConfigItem[]

export interface ModalInstance {
  name: string
  data: any
  visible: boolean
}

export interface IModals {
  [modalName: string]: ModalInstance
}
