import { mutate, getState } from 'stook'
import { IModals, ModalInstance } from './typings'
import { PEA_MODAL } from './constant'

export const modalStore = {
  open(name: string, data?: any) {
    mutate(PEA_MODAL, (modals: IModals) => {
      if (!modals[name]) {
        modals[name] = { name } as ModalInstance
      }

      modals[name].data = data
      modals[name].visible = true
    })
  },

  close(name: string) {
    mutate(PEA_MODAL, (modals: IModals) => {
      if (modals[name]) {
        modals[name].visible = false
      }
    })
  },
  get(name: string): ModalInstance {
    const store: any = getState(PEA_MODAL)
    return store[name]
  },
}
