import React, { FC } from 'react'
// import { Box } from '@fower/react'
import { PopoverContext, PopoverProps } from './types'
import { useLayer } from 'react-laag'
import { PopoverProvider } from './context'

export const Popover: FC<PopoverProps> = (props) => {
  const {
    initialOpened = false,
    placement,
    possiblePlacements = ['bottom-start', 'bottom-end'],
    triggerOffset = 12,
    containerOffset = 16,
    arrowOffset = 6,
    onClose,
    onOpen,
    children,
  } = props
  // opened
  const [isOpen, setOpen] = React.useState(initialOpened)

  const open = () => {
    setOpen(true)
    onOpen?.()
  }

  const close = () => {
    setOpen(false)
    onClose?.()
  }

  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    auto: true,
    possiblePlacements,
    placement,
    triggerOffset,
    containerOffset,
    arrowOffset,
    onParentClose: () => {
      setOpen(false)
    },
  })

  const ctx = {
    triggerProps,
    setOpen,
    isOpen,
    renderLayer,
    layerProps,
    arrowProps,
    getRenderProps() {
      return { isOpen, close, open }
    },
  } as PopoverContext

  return (
    <PopoverProvider value={ctx}>
      {typeof children === 'function' ? children({} as any) : children}
    </PopoverProvider>
  )
}

Popover.defaultProps = {
  trigger: 'click',
  placement: 'right-center',
}
