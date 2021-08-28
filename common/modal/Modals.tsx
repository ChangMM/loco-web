import React, { ComponentType, Fragment } from 'react'
import { Modal, ModalOverlay, ModalContent } from '@bone-ui/modal'
import { useStore } from 'stook'
import { ModalConfig, IModals } from './typings'
import { PEA_MODAL } from './constant'

export const Modals: ComponentType<{ config: ModalConfig }> = ({ config }) => {
  const [modals, updateModals] = useStore<IModals>(PEA_MODAL, {})

  const close = (name: string) => {
    updateModals((drawers) => {
      drawers[name].visible = false
    })
  }

  const isVisible = (name: string) => {
    return modals[name] && modals[name].visible
  }

  if (!config) return null

  return (
    <Fragment>
      {config.map(({ name, component }) => {
        const Content = component
        const props = Content.modalProps || {}
        return (
          <Modal isOpen={isVisible(name)} onClose={() => close(name)} key={name} {...props}>
            <ModalOverlay />

            <ModalContent>
              <Content />
            </ModalContent>
          </Modal>
        )
      })}
    </Fragment>
  )
}
